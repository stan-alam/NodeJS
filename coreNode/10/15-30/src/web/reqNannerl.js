const http = require('http');

http.request({hostname: 'www.nannerl.io'},
(res) => {
  console.log(res);
});
