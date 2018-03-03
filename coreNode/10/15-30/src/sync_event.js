//sync_event.js
const EventEmitter = require('events');

class Logger extends EventEmitter {
  execute(theTask) {
    console.log('State before execution');
    this.emit('Begin');
    theTask();
    this.emit('fin');
    console.log('State after execution');
  }
}

const logger = new Logger();

logger.on('begin', () => console.log('About to execute'));
logger.on('end', () => console.log('Done with executing'));

logger.execute(() => console.log('***** execute task ******* '));
