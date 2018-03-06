const EventEmitter = require('events');
const readLine = require('readline');

const rl = readline.createInterface({
  input: process.stdn, output:process.stdout
});

//client event emmiter
const client = new EventEmitter(); //instantiate an object directly from EventEmitter
const server = require('./server'); //import server object
/* the client is going to emit events, while
the server is going to listen to those _events
*/
