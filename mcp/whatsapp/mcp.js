import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import makeWASocket, { useMultiFileAuthState } from 'baileys';
import QRCode from 'qrcode';
import P from 'pino';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create an MCP server
let server = new McpServer({
    name: 'whatsapp-mcp',
    version: '1.0.0'
});

// Add an addition tool
server.registerTool(
    'send',
    {
        title: 'Send message',
        description: 'Send message to group',
        inputSchema: { group: z.string(), text: z.string() }
    },
    async ({ group, text }) => {
        let response = await sendMessage(group, text);
        return response;
    }
);

function sendMessage(group = null, message = null) {
    return new Promise(async (resolve, reject) => {
        let { state, saveCreds } = await useMultiFileAuthState(
            dirname(fileURLToPath(import.meta.url)) + '/auth_info_baileys'
        );
        let sock = makeWASocket({
            auth: state,
            logger: P(
                {
                    level: 'silent' // info
                },
                P.destination(2)
            )
        });
        sock.ev.on('creds.update', saveCreds);
        sock.ev.on('connection.update', async update => {
            let { connection, lastDisconnect, qr } = update;
            if (qr) {
                if (!isCli) {
                    resolve({ content: [{ type: 'text', text: 'QR Code muss gescannt werden. node mcp.js --cli' }] });
                    return;
                }
                let code = await QRCode.toString(qr, { type: 'utf8' });
                console.error(code);
            } else {
                if (isCli === true && connection === 'close') {
                    let statusCode = lastDisconnect?.error?.output?.statusCode;
                    // reconnect after pairing (needed!)
                    if (statusCode === 515) {
                        resolve(await sendMessage());
                        return;
                    } else {
                        resolve();
                        return;
                    }
                }

                if (isCli === true && connection === 'open') {
                    console.log('Authentifizierung bereits erfolgreich.');
                    let response = await sock.groupFetchAllParticipating();
                    resolve(response);
                    return;
                }

                if (isCli === false && connection === 'open') {
                    // send message to group
                    let response = await sock.groupFetchAllParticipating();
                    let msgResponse = null;
                    for (let response__value of Object.values(response)) {
                        if (response__value.subject === group) {
                            msgResponse = await sock.sendMessage(response__value.id, { text: message });
                        }
                    }
                    resolve({ content: [{ type: 'text', text: JSON.stringify(msgResponse, null, 2) }] });
                    return;
                }
            }
        });
    });
}

let isCli = process.argv.includes('--cli');

if (isCli) {
    await sendMessage();
    process.exit();
} else {
    // Start receiving messages on stdin and sending messages on stdout
    let transport = new StdioServerTransport();
    await server.connect(transport);
}
