const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 41234;
const HOST = '127.0.0.1';

server.on('listening', () => {
    const address = server.address();
    console.log(`✅ Server listening on ${address.address}:${address.port}`);
});

server.on('message', (msg, rinfo) => {
    console.log(`📩 Received from client: ${msg} from ${rinfo.address}:${rinfo.port}`);

    const reply = Buffer.from('Hello from server!');
    server.send(reply, rinfo.port, rinfo.address, (err) => {
        if (err) console.error('❌ Error sending reply:', err);
        else console.log(`📤 Sent reply to ${rinfo.address}:${rinfo.port}`);
    });
});

server.bind(PORT, HOST);
