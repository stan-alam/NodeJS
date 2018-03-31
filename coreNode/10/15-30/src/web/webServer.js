const fs = require('fs');
const server = require('http').createServer();
const colorData = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    },
  ]
}

server.on('request', (req, res) => {
  switch (req.url) {
  case '/api':
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(colorData));
    break;
  case '/home':
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(`.${req.url}.html`));
    break;
  case '/':
    res.writeHead(301, { 'Location': '/home' });
    res.end();
    break;
  default:
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
