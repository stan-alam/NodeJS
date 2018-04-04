const { Readable } = require('stream'); // implement a readable stream, require a READABLE interface, and construct an object

const streamIn = new Readable({
  read(size) {
    setTimeout(() => {
      if(this.currentCharCode > 90){ //stop at letter z
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
  }, 100);
 }
});

streamIn.currentCharCode = 65;
streamIn.pipe(process.stdout);

process.on('exit', () => {
  console.error(`\n\ncurrentCharCode : ${streamIn.currentCharCode}`);
});
//stdout is not a tty got this on git-bash for win
