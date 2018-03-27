const server = require('https')
  .createServer({
  key:
  cert:
});
//use openssl toolkit
server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hola, Multiverse(s)!\n');
});

server.listen(8000);
