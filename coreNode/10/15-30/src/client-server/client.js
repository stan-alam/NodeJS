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
    //console.log(`Response: ${resp}`);
    process.stdout.write('\u001B[2J\u001B[0;0f'); //clear terminal
    process.stdout.write(resp);
    process.stdout.write('\n\>');
});
//use the readline interInterface
let command, args;
rl.on('line', (input) => { //here register a listener for the line event, that receives an input
  [command, ...args] = input.split(' '); //split on space, the first "token" will be on command, the rest will be passed in the arguments(args)
  client.emit('command', command, args; //pass both command and argument, it will be parsed at the first space after command
}); // the client is going to emit an input EVENT to the server
