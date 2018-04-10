const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); //to simulate CPU work
  res.end(`Work handled by process ${pid}`);

}).listen(8080, () => {
  console.log(`Begining process start ${pid}`);
});
