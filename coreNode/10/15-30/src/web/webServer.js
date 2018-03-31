const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  switch (req.url) {
  case '/home':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(''));
  }
})

server.listen(8000);
