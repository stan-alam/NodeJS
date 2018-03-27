const fs = require('fs');
const server = require('https')
  .createServer({
  key: fs.readFileSync('./key.pem'), //readFileSync for reading file only once
  cert: fs.readFileSync('./cert.pem'),
});
//use openssl toolkit
server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hola, Multiverse(s)!\n');
});

server.listen(443);

//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
