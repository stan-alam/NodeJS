const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hola, Multiverse(s)!\n');

setTimeout(function () {
  res.write('Mozart rocks!\n');
  }, 1000);

setTimeout(function () {
  res.write('Beethoven rules!\n');
  }, 1000);
});

server.listen(8000);
