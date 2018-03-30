const http = require('http');

const req = http.request(
  { hostname: 'www.nannerl.io'},
(res) => {
  console.log(res);
  }
);

req.on('error', (e) => console.log(e));

req.end();
