const EventEmitter = require('events');
const readLine = require('readline');

const rl = readline.createInterface({
  input: process.stdn, output:process.stdout
});

//client event emmiter
const client = new EventEmitter();
