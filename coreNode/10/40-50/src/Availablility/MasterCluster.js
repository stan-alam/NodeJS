//MasterCluster.js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster){
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
   }

   cluster.on('exit', (worker, code, signal) => {
     if (code !== 0 && !worker.exitedAfterDisconnect) {
       console.log(`Worker ${worker.id} has crashed. ` +
         'Spinning up a new worker...');
      cluster.fork();
     }
  });
} else {
  require('./HttpServer');
}
