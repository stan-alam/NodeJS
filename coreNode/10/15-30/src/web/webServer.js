const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  switch (req.url) {
  case '/home':
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(`.${req.url}.html`));
    break;
  case '/':

    break;
  default:

  }
});

server.listen(8000);
