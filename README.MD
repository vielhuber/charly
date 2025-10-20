# 🦸🏽‍♂️ charly 🦸🏽‍♂️

a comprehensive model context protocol (mcp) server gateway that integrates multiple mcp servers with unified authentication through oauth2 and bearer tokens including a convenient web client.

## requirements

- node (`>= 22.0`)
- python (`>= 3.0`)
- php (`>=8.0`)

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

- [https://developers.cloudflare.com](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/local-management/create-local-tunnel/)

### auth0

- register/login on https://auth0.com
- applications > apis
    - copy `api audience`
- user management > create user

#### browser

- applications > applications > create application
    - type: `Single Page Web Applications`
    - allowed callback urls: `https://*.ngrok-free.app/auth/auth/callback,https://your-custom-domain.com/auth/auth/callback`
    - copy `Client ID` and `Client Secret`
- test
    - chatgpt.com / claude.ai / chatgpt playground: login via browser
    - mcp inspector: start oauth flow or simply click "connect" (the browser redirects); remove "add custom headers"!

#### api

- applications > applications > create application
    - type: `Machine to Machine Applications`
    - api: auth0 management api > permissions: all
    - copy `Client ID` and `Client Secret`
- test
    - create token `xxx` (e.g. via curl) to authorize with bearer token
    - mcp inspector: add custom headers: `Authorization: Bearer xxx`
    - claude api / chatgpt api: `"authorization_token": "xxx"`

### chrome

- add fresh chrome profile
- download chrome extension from https://github.com/hangwin/mcp-chrome
- unzip e.g. in `~/`
- `chrome://extensions/`
- load unpacked extension
- choose folder
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
