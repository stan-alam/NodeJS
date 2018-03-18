const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) { //define the constructor to receive the client *within the server class
        super();
        //this.emit('response', 'Welcome -- enter a command or help for list of commands'); // THIS IS NOT WORKING!
        /* this.emit does not work because it will be executed when
        const server = require(./server)(client) in client.js will be executed
         This is the sequential order, so the handler of the reponse event is not being defined at execution time
         */

        process.nextTick(() => {
            this.emit('response', 'Welcome - type a command or enter help for list of valid command options');
        });
        client.on('command', (command) => {
            console.log(`Command: ${command}`);
            switch (command) {
                case 'help':
                case 'add':
                case 'del':
                case 'ls':
                    this[command](); // no arguments
                    break;
                default: // case in which is unknown command
                    this.emit('response', 'unknown command:' + `${command}`);
            }
            // help, add, del, ls
        });
    }
    help() { //create an instance method for each command
        this.emit('response', `Available commands:
        add, del {id}, ls`);
    }
    add(args) {
        this.emit('response', 'adding ...');
    }
    del() {
        this.emit('response', 'deleting ...');
    }
    ls() {
        this.emit('response', 'ls-Ing...');
    }
}
//created a function not just an object
module.exports = (client) => new Server(client); // Server(client) instantiate the server object with the client object
//the function (client) is going to receive the client
