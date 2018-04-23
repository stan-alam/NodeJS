//cluster2.js
const cluster = require('cluster');
const os = require('os');

//make db call (mock)
const usersDB = function() {
  this.count = this.count || 5;
  this.count = this.count * this.count;
  return this.count;
}
if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i <cpus; i++) {
    cluster.fork();
  }

const updateWorkers = () => {
  console.dir(cluster.workers, { depth: 0 });
  const usersCount = usersDB();
  Object.values(cluster.workers).forEach(worker => {
      worker.send({usersCount}); //broadcast number of users

  });
};

setInterval(updateWorkers, 1000); //update workers on 10 second interval, every 10 seconds worker(s) will receive count over comm channel    
} else {
  require('./HttpServer2');
}
