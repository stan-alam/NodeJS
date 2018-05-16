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

process.on('SIGUSR2', () => {
  const workers = Object.values(cluster.workers);

  const restartWorker = (workerIndex) => {
    const worker = workers[workerIndex];
    if (!worker)
      return;

    worker.on('exit', () => {
      if (!worker.exitedAfterDisconnect) //set flag if true, fork new worker
      console.log(`Exited process ${worker.process.pid}`)
      cluster.fork().on('Listening ... ', () => {
        restartWorker(workerIndex + 1);
      });
    });
      worker.disconnect();
  };

  restartWorker(0);
});

} else {
  require('./HttpServer');
}
