const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server is listening on on p 3333')); // listening event

server.on('message', (msg, rinfo) => { // register handle for message event, callback exposes message and -->
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`); // remote address and port
});

const PORT = 3333;
const HOST = '127.0.0.1'; //home
server.bind(PORT, HOST);
