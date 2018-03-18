const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//client event emmiter
const client = new EventEmitter(); //instantiate an object directly from EventEmitter
const server = require('./server')(client); //import server object
/* the client is going to emit events, while
the server is going to listen to those events
*/
server.on('response', (resp) => { //when the server emits a response event, the listener will access the response as a function
  console.log(`Response: ${resp}`);
});
//use the readline interInterface
rl.on('line', (input) => { //here register a listener for the line event, that receives an input
  client.emit('command', input);  // now everytime the user presses ENTER,
});  // the client is going to emit an input EVENT to the server
