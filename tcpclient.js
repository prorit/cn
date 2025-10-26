const net = require('net');

const PORT = 12345;
const HOST = '127.0.0.1';

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log(`Successfully connected to server at ${HOST}:${PORT}`);
    const message = "Hello, server! This is this Suyash.";
    console.log(`Sending to server: ${message}`);
    client.write(message);
});

client.on('data', (data) => {
    const response = data.toString('utf-8');
    console.log(`Received from server: ${response}`);
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server.');
});

client.on('error', (err) => {
    console.error(`Connection Error: ${err.message}`);
});  