// udp_client.js
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const PORT = 41234;
const HOST = '127.0.0.1';

const message = Buffer.from('Hello from client!');

client.send(message, PORT, HOST, (err) => {
    if (err) {
        console.error('❌ Error sending message:', err);
        client.close();
    } else {
        console.log(`📤 Message sent to server: ${message}`);
    }
});

// Listen for server’s response
client.on('message', (msg, rinfo) => {
    console.log(`📩 Received reply from server: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
    client.close();
});
