# 🦸🏽‍♂️ charly 🦸🏽‍♂️

a comprehensive model context protocol (mcp) server gateway that integrates multiple mcp servers with unified authentication through oauth2 and bearer tokens including a convenient web client.

## requirements

- node (`>= 22.0`)
- python (`>= 3.0`)
- php (`>=8.1`)

## usage

### server

- `uvicorn server.mcp:app --host 0.0.0.0 --port 8000`
- `cloudflared tunnel run --url http://localhost:8000 TUNNEL`

### client

- `https://your-client-tld.local`

## installation

### setup

- `git clone git@github.com:vielhuber/charly.git .`
- `cp config.example config.json`
- `vi config.json`
- `composer install`
- `npm install`
- `python -m venv venv`
- `pip install -r requirements.txt`
- setup vhost (apache/nginx with ssl) that points to `/client/_public`

### update

- `git pull`

### cloudflare

- [https://developers.cloudflare.com/.../create-local-tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/local-management/create-local-tunnel/)

### auth0

- register/login on https://auth0.com
- user management > create user

#### browser

- applications > applications > create application
    - type: `Single Page Web Applications`
    - allowed callback urls: `https://*.ngrok-free.app/auth/auth/callback,https://your-custom-domain.com/auth/auth/callback`
    - copy `Client ID` and `Client Secret`
- test
    - chatgpt.com / claude.ai: login via browser
    - mcp inspector: start oauth flow or simply click "connect" (the browser redirects); remove "add custom headers"!

#### api

- applications > applications > create application
    - type: `Machine to Machine Applications`
    - api: auth0 management api > permissions: all
    - copy `Domain`, `Client ID` and `Client Secret`
- test
    - create token `xxx` (e.g. via curl) to authorize with bearer token
    - mcp inspector: add custom headers: `Authorization: Bearer xxx`
    - claude api / chatgpt api / openai playground: `"authorization_token": "xxx"`

```
curl \
    -s -X POST \
    https://%YOUR_API_DOMAIN%/oauth/token \
    -H "Content-Type: application/json" \
    -d '
        {
            "client_id":"%YOUR_CLIENT_ID%",
            "client_secret":"%YOUR_CLIENT_SECRET%",
            "audience":"%YOUR_API_DOMAIN%/api/v2/",
            "grant_type":"client_credentials"
        }
    ' \
    | jq -r '.access_token' | xclip -selection clipboard
```

## recommended mcp servers

for example configurations of the following servers, see [config.example.json](config.example.json).

### filesystem

- **mcp-filesystem-server**
    - [https://github.com/mark3labs/mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server)
- installation
    - `go install github.com/mark3labs/mcp-filesystem-server@latest`

### word

- **Office-Word-MCP-Server**
    - [https://github.com/GongRzhe/Office-Word-MCP-Server](https://github.com/GongRzhe/Office-Word-MCP-Server)
- installation
    - `git clone https://github.com/GongRzhe/Office-Word-MCP-Server.git`
    - `cd Office-Word-MCP-Server`
    - `python setup_mcp.py (STDIO + Install from PyPI)`

### email

- **mailhelper**
    - [https://github.com/vielhuber/mailhelper](https://github.com/vielhuber/mailhelper)

### whatsapp

- **wahelper**
    - [https://github.com/vielhuber/wahelper](https://github.com/vielhuber/wahelper)

### browser

- **playwright**
    - [https://github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)
- installation
    - `nvm use --lts`
    - `npx install @playwright/mcp@latest`
    - `npx playwright install chrome`

### local chrome

- **mcp-chrome**
    - [https://github.com/hangwin/mcp-chrome](https://github.com/hangwin/mcp-chrome)
- installation
    - add fresh chrome profile
    - unzip downloaded extension in `~/`
    - open `chrome://extensions/` > load unpacked extension > choose folder
    - windows (not wsl)
        - `npm install -g mcp-chrome-bridge`
        - `mcp-chrome-bridge register`
    - start server in chrome extension
    - wsl
        - cmd (admin):
            - `netsh interface portproxy show v4tov4`
            - `netsh interface portproxy delete v4tov4 listenaddress=192.168.0.2 listenport=12306`
            - `netsh interface portproxy add v4tov4 listenaddress=192.168.0.2 listenport=12306 connectaddress=127.0.0.1 connectport=12306`
            - if these rules are available but don't work
                - `net stop iphlpsvc && net start iphlpsvc`
        - powershell (admin):
            - `New-NetFirewallRule -DisplayName "chrome-mcp" -Direction Inbound -LocalPort 12306 -Action Allow -Protocol TCP`
        - test:
            - windows: `http://127.0.0.1:12306/mcp`
            - wsl: `http://192.168.0.2:12306/mcp` (local ip from `ipconfig`)

### custom php application

- **php-mcp**
    - [https://github.com/php-mcp/server](https://github.com/php-mcp/server)
- installation
    - `composer require php-mcp/server`

### custom js application

- **typescript-sdk**
    - [https://github.com/modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk)
- installation
    - `nvm use --lts`
    - `npm install @modelcontextprotocol/sdk`
    - `printf '{ "type": "module" }\n' > package.json`
