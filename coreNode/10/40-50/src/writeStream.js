const { Writable } = require('stream');

const streamOut = new Writable({
  write(chunk, encoding, callback) {
  console.log(chunk.toString());
  callback();
  }
});

// basically anything this receives will echo right back.
process.stdin.pipe(streamOut); // piping stdin which is a readable stream into streamOut
