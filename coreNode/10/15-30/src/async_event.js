const fs = require('fs');
const EventEmitter = require('events');

class ElapsedTime extends EventEmitter {
execute(asyncFunc, ...args) {
  console.time('execute');
  this.emit('begin');
  asyncFunc(...args, (err, data) => {

  })
}
}
