## Learning to manipulate the file-system with NodeJS

### Objectives

  * NodeJS core
      Use buffers for transporting data between NodeJS engine
      and native core. **use NodeJS core libs**

  * Patterns
    Use patterns such as callbacks for handling async events.
    Mostly use **event emitter**

  * JavaScript
    Use block scoping and arrow-functions, best practices.

  * Detect state changes and work with child processes

**Detecting file changes comes in useful for example automated deployments
and running unit tests**

**'use strict' -- enforces ECMAScript 5, for JS to be better, e.g. throw exceptions.**

The *const* keyword setups 'fs' to be a local variable with a constant value(the variable will not change)

**In NodeJS the require() is usually a plain old JS object** Many modules can depend on other modules (dependency chain) like the import statement or include.

**In JS functions are first class citizens** -- which only means that they can be assigned to variables and passed as parameters to other functions.

```JavaScript

() => console.log('file has been changed');

```
**an arrow expression** - The empty pair of parentheses() at the beginning means this function expects no arguments. Within the body of the function we see console.log() which prints to stdout.

prior to ECMAScript 2015 -- using the verbose callback function(){}

```JavaScript

function() {
  console.log('File has changed');
}

```

## So what's so cool about arrow functions?

The code is more terse and "functional." But mostly because they don't create a new scope for *this.*

## Picturing the Event Loop in all its glory

In this case the file watcher follows these steps

  * Loads the script -- executing till the last line. And prints the console message

  * It encounters the fs.watch() function

  * It waits for an even (something to happen) -- primarily focused on the fs module
  to observe a change in the file itself.

  * It calls the callback function when there is a change detected.

  * Again it will continue to listen until as it determines that the program is not finished and changes to the file are still on going. Infinite Loop

**The event loop continues indefinitely until there is either an exception or the condition of the program requires an event to exit the Loop**

**argv** - standard argument vector


## Spawning child processes

We will add to the file watcher program

```JavaScript

'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
    throw Error('You must specify a file, error, error!');
}

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
});
console.log(`Watching ${filename} for changes`);


```

### Template Strings

**We use backticks to mark the strings logged in the program**

```JavaScript

`File ${filename} changed!`

```

**This in the common vernacular are 'template' strings. Template strings can span multiple lines and support inerpolation**

**Interpolation** -- Means you can place an expression inside of ${} and it will insert the **stringified** result. Just kind of like when you use JSON.strinfiy, but not really.

**Unhandled exceptions will halt the process**

### Processes

Processes are important in Node. It will be expected of you to distribute processes in node to breakup work. This is better than putting everything in one bucket.(one node app).

## Spawing a child process --

The object will be to spawn a child process in response to change within the file being watched.

```JavaScript

'use strict'
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filemame) {
  throw Error('You must specify a file ...');
  }

fs.watch(filename, () => {
  const ls = spawn('ls', ['-l'], '-h', filename]);
  ls.stdout.pipe(process.stdout);
});
console.log(`Watching ${filename} ...`); // notice the template string


```
