const fs = require('fs');
const EventEmitter = require('events');

class ElapsedTime extends EventEmitter {
execute(asyncFunc, ...args) {
  console.time('execute');
  this.emit('begin');
  asyncFunc(...args, (err, data) => {
    if(err) {
      return this.emit('error', err);
    }

    this.emit('data', data);
    console.timeEnd('execute');
    this.emit('end');
  });
  }
}

const elapsedTime = new ElapsedTime();

elapsedTime.on('begin', () => console.log('ready to exec'));
elapsedTime.on('end', () => console.log('completed execution'));

elapsedTime.execute(fs.readFile, __filename);
