import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import makeWASocket, { useMultiFileAuthState } from 'baileys';
import QRCode from 'qrcode';
import P from 'pino';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __dirname__ = dirname(fileURLToPath(import.meta.url));

function log(...args) {
    let stream = fs.createWriteStream(__dirname__ + '/mcp.log', { flags: 'a' });
    let message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg)).join(' ');
    stream.write(`${new Date().toISOString()} - ${message}\n`);
}

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
        log([group, text]);
        let response = await sendMessage(group, text);
        return response;
    }
);

function sendMessage(group = null, message = null) {
    return new Promise(async (resolve, reject) => {
        let { state, saveCreds } = await useMultiFileAuthState(__dirname__ + '/auth_info_baileys');
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
            //console.log(connection);
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
                        resolve(await sendMessage(group, message));
                        return;
                    } else if (statusCode === 401) {
                        if (fs.existsSync(__dirname__ + '/auth_info_baileys')) {
                            fs.rmSync(__dirname__ + '/auth_info_baileys', { recursive: true, force: true });
                            console.log('reset authentication. try again!');
                        }
                        resolve(await sendMessage(group, message));
                        return;
                    } else {
                        resolve();
                        return;
                    }
                }

                if (connection === 'open') {
                    // send message to group
                    let response = await sock.groupFetchAllParticipating();
                    //console.log(response);

                    if (message === null || group === null) {
                        console.log('auth already done.');
                        resolve(response);
                        return;
                    }

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
