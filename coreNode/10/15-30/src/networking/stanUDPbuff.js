const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1'; //home

//server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server is listening on on p 3333')); // listening event

server.on('message', (msg, rinfo) => { // register handle for message event, callback exposes message and -->
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`); // remote address and port
});


server.bind(PORT, HOST);

//clients
setInterval(function () {
  const client = dgram.createSocket('udp4');
  const msg = Buffer.from('Mozart ROCKS!!!')

  client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log('message sent by UDP');
    client.close();
  });
}, 1000);
