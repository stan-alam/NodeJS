const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) { //define the constructor to receive the client *within the server class
    super();
    client.on('command', (command) => {
      console.log(`Command: ${command}`);
      switch(command) {
        case 'help':
        case 'add':
        case 'del':
        case 'ls':
        this[command]();
        break;
      default: // case in which is unknown command
        this.emit('response', 'unknown command:' + `${command}`);
      }
      // help, add, del, ls
    });
  }
    help() { //create an instance method for each command
      this.emit('response', 'help is on the way ...');
    }
    add() {
      this.emit('response', 'adding ...');
      }
   del() {
     this.emit('response', 'deleting ...');
   }
   ls(){
     this.emit('response', 'ls-Ing...');
   }
}
//created a function not just an object
module.exports = (client) => new Server(client); // Server(client) instantiate the server object with the client object
//the function (client) is going to receive the client
