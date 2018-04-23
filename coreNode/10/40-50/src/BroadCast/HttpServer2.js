const http = require('http');
const pid = process.pid;

let usersCount; //variable is set at the global level

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); //to simulate CPU work
  res.write(`Work handled by process ${pid}`); //changed write to output both messages
  res.end(`Users: ${usersCount}`); //here the userCounts variable is controlled by the message interface
}).listen(8080, () => {
  console.log(`Begining process start ${pid}`);
});

process.on('message', msg => {
//  console.log(`Message from master: ${msg.toString()}`);
  usersCount = msg.usersCount;
});
// the master process in cluster2.js will reset the usercount every 10 secs through invokation of the mock db call
