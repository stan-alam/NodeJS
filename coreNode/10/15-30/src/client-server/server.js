const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) { //define the constructor to receive the client *within the server class
    super();
    client.on('command', (command) => {
      console.log(`Command: ${command}`);
      // help, add, del, ls
    });
  }
    help() {
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
