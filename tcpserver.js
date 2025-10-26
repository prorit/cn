console.log("Starting server...");

const net = require('net');

const PORT = 12345;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
    console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on('data', (data) => {
        const message = data.toString('utf-8');
        console.log(`Received from client: ${message}`);
        socket.write("Message received by server.");
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });

    socket.on('error', (err) => {
        console.error(`Socket Error: ${err.message}`);
    });
});

// 🔴 This is critical! Make sure this is at the bottom of the file:
server.listen(PORT, HOST, () => {
    console.log(`Server is listening for connections on ${HOST}:${PORT}`);
});
