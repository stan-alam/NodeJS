const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) { //define the constructor to receive the client *within the server class
    super();  
  }
}
//created a function not just an object
module.export = (client) => new Server(client); // Server(client) instantiate the server object with the client object
//the function (client) is going to receive the client
