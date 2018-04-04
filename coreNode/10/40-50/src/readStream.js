const { Readable } = require('stream'); // implement a readable stream, require a READABLE interface, and construct an object

// const streamIn = new Readable();
//
// streamIn.push('abc, 123');
// streamIn.push(null);
// we're pushing all data into the stream before piping it to stdout
// streamIn.pipe(process.stdout);


// it is better to push data when consumer demands it.

const streamIn = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if(this.currentCharCode > 90){ //stop at letter z
      this.push(null);
    }
  }
});

streamIn.currentCharCode = 65;

streamIn.pipe(process.stdout);
