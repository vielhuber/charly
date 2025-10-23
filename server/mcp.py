import os
import json
import logging
from typing import Optional
from contextlib import AsyncExitStack, asynccontextmanager
import asyncio

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
import httpx

from fastmcp import FastMCP
from fastmcp.server.proxy import ProxyClient
from fastmcp.client.transports import StdioTransport
from fastmcp.server.auth.providers.auth0 import Auth0Provider
from fastmcp.server.auth.providers.jwt import JWTVerifier

# load config
with open(os.path.join(os.path.dirname(__file__), "..", "config.json"), "r") as f:
    config = json.load(f)

# logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    filename="mcp_debug.log",
)
#logger = logging.getLogger("mcp_debug")
for name in [
    "mcp.server.lowlevel.server",
    "mcp.server.streamable_http",
    "mcp.server.logging",          # Remote-Logs (window/logMessage Events)
    "mcp.client.streamable_http",
    "httpx",
    "httpcore",
]:
    log = logging.getLogger(name)
    log.setLevel(logging.DEBUG)
    # Optional: gleiche Handler wie Root übernehmen
    log.propagate = True

"""
async def simple_log_requests(request: Request, call_next):
    headers_lines = "\n".join([f"    {k}: {v}" for k, v in request.headers.items()])
    if True is True:
        logger.info(
            f"\n{'='*80}\n"
            f"→ {request.method} {request.url.path}\n"
            f"  Full URL: {request.url}\n"
            f"  Query: {dict(request.query_params)}\n"
            f"  Headers:\n{headers_lines}\n"
            f"{'-'*80}"
        )
    response = await call_next(request)
    if True is True:
        logger.info(f"← Status: {response.status_code}\n{'='*80}\n")
    return response
"""


# authentication
auth_oauth2 = Auth0Provider(
    config_url=f"{config["AUTH0"]["URL"]}/.well-known/openid-configuration",
    client_id=config["AUTH0"]["CLIENT_ID"],
    client_secret=config["AUTH0"]["CLIENT_SECRET"],
    audience=f"{config["AUTH0"]["URL"]}/api/v2/",
    base_url=f"{config["BASE_URL"]}/auth",
)
auth_bearer = JWTVerifier(
    jwks_uri=f"{config["AUTH0"]["URL"]}/.well-known/jwks.json",
    issuer=f"{config["AUTH0"]["URL"]}/",
    audience=f"{config["AUTH0"]["URL"]}/api/v2/",
)

# base app (because some clients fall back to the root path for oauth)
base = FastMCP(name="global auth", auth=auth_oauth2)
base_app = base.http_app(path="/mcp")
#base_app.middleware("http")(simple_log_requests)

mcps = {"clients": {}, "apps": {}, "api_apps": {}}
for idx, server_config in enumerate(config["MCP_SERVERS"]):
    id = f"mcp{idx+1}"
    id = server_config["name"]
    if server_config["type"] == "stdio":
        mcps["clients"][id] = ProxyClient(
            transport=StdioTransport(
                command=server_config["config"]["command"],
                args=server_config["config"]["args"],
                env=dict(os.environ),  # inherit env (populate $_SERVER)
                cwd=(
                    os.path.dirname(server_config["config"]["args"][0])
                    if os.path.isfile(server_config["config"]["args"][0])
                    else None
                ),
            )
        )
    if server_config["type"] == "http":
        mcps["clients"][id] = ProxyClient(server_config["config"]["url"])

    # TODO: chatgpt playground has problems here
    stateless_http = True
    if server_config["name"] == "filesystem":
        stateless_http = False

    mcps["apps"][id] = FastMCP.as_proxy(
        mcps["clients"][id],
        name=server_config["name"],
        stateless_http=stateless_http,
        auth=auth_oauth2,
    ).http_app(path="/mcp")
    #mcps["apps"][id].middleware("http")(simple_log_requests)
    mcps["api_apps"][id] = FastMCP.as_proxy(
        mcps["clients"][id],
        name=server_config["name"],
        stateless_http=stateless_http,
        auth=auth_bearer,
    ).http_app(path="/")


@asynccontextmanager
async def lifespan(parent_app):
    async with AsyncExitStack() as stack:
        await stack.enter_async_context(base_app.lifespan(parent_app))
        for idx, server_config in enumerate(config["MCP_SERVERS"]):
            id = f"mcp{idx+1}"
            id = server_config["name"]
            await stack.enter_async_context(mcps["apps"][id].lifespan(parent_app))
            await stack.enter_async_context(mcps["api_apps"][id].lifespan(parent_app))
        yield


app = FastAPI(title="MCP Server", lifespan=lifespan)

# add cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# send different response codes for delete / terminate requests
@app.delete("/{mcp_id}/mcp")
def end_session(mcp_id: str):
    return Response(status_code=204)

# claude.ai sends too many requests; only do one after another
request_lock = asyncio.Semaphore(1)
@app.middleware("http")
async def throttle_requests(request: Request, call_next):
    # nur Lock für MCP-Endpunkte
    if not request.url.path.startswith("/auth") and not request.url.path.startswith("/.well-known"):
        print("awaiting lock")
        async with request_lock:
            print("pass")
            return await call_next(request)
    return await call_next(request)

# fix oauth discovery of chatgpt/claude
@app.get("/.well-known/oauth-protected-resource")
@app.get("/.well-known/oauth-protected-resource/{mcp_id}/mcp")
async def oauth_protected_resource(request: Request, mcp_id: Optional[str] = None):
    async with httpx.AsyncClient(
        transport=httpx.ASGITransport(app=request.app),
        base_url=str(request.base_url),
        follow_redirects=True,
    ) as client:
        upstream = await client.get(str(f"/auth/.well-known/oauth-protected-resource"))
    upstream.raise_for_status()
    data = upstream.json()
    if mcp_id is not None:
        data = json.loads(json.dumps(data).replace(f"/auth", f"/{mcp_id}"))
    return JSONResponse(
        data,
        headers={
            "Cache-Control": "no-store, no-cache, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        },
    )

@app.get("/.well-known/oauth-authorization-server")
@app.get("/.well-known/oauth-authorization-server/{suffix}")
async def oauth_authorization_server(request: Request, suffix: Optional[str] = None):
    async with httpx.AsyncClient(
        transport=httpx.ASGITransport(app=request.app),
        base_url=str(request.base_url),
        follow_redirects=True,
    ) as client:
        upstream = await client.get(
            str(f"/auth/.well-known/oauth-authorization-server")
        )
    upstream.raise_for_status()
    data = upstream.json()
    if suffix is not None:
        data = json.loads(json.dumps(data).replace(f"/mcp", f"{suffix}"))
    return JSONResponse(
        data,
        headers={
            "Cache-Control": "no-store, no-cache, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        },
    )


for idx, server_config in enumerate(config["MCP_SERVERS"]):
    id = f"mcp{idx+1}"
    id = server_config["name"]
    app.mount(f"/api/{id}/mcp", mcps["api_apps"][id])
    app.mount(f"/{id}", mcps["apps"][id])

app.mount("/auth", base_app)
