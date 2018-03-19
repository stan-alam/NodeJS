const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) { //define the constructor to receive the client *within the server class
        super();
        //this.emit('response', 'Welcome -- enter a command or help for list of commands'); // THIS IS NOT WORKING!
        /* this.emit does not work because it will be executed when
        const server = require(./server)(client) in client.js will be executed
         This is the sequential order, so the handler of the reponse event is not being defined at execution time
         */
        this.tasks = {}; //task object to hold task info
        this.taskId = 1; //task Id to keep track of number tasks starting at 1, counter holder for new tasks
        process.nextTick(() => {
            this.emit('response', 'Welcome - type a command or enter help for list of valid command options');
        });
        client.on('command', (command, args) => { //now server can accept a command and an array of arguments
            console.log(`Command: ${command}`);
            switch (command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'del':
                    this[command](args); // NOW THE ARRAY OF ARGS CAN BE PASSED TO EVERY COMMAND TO BE EXECUTED.
                    break;
                default: // case in which is unknown command
                    this.emit('response', 'unknown command: ' + `${command}`);
            }
            // help, add, del, ls
        });
    }

    tasksString() {
      return Object.keys(this.tasks).map(key => { //loop over key, return task, for every key return string to ls
        return `${key}: ${this.tasks[key]}`;
      }).join('\n');
    }

    help() { //create an instance method for each command
        this.emit('response', `Available commands:
        add, del {id}, ls`);
    }
    add(args) {
        this.tasks[this.taskId] = args.join(' ');  // each task is now added to task object
        this.emit('response', `Added task ${this.taskId}`); //emit the number of the task to user
        this.taskId++;
    }
    del() {
       delete(this.tasks[args[0]]); //for deleting the task, delete the id indicated by user
       this.emit('response', `Deleting task ${args[0]}`); //print to console task has been deleted
    }
    ls() {
        this.emit('response', `List of Tasks\n${this.tasksString()}`);
    }
}
//created a function not just an object
module.exports = (client) => new Server(client); // Server(client) instantiate the server object with the client object
//the function (client) is going to receive the client
