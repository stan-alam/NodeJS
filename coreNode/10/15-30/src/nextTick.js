const fs = require('fs');

function fileSize (fileName, mycallBack) {
  if (typeof fileName !== 'string') {
    return mycallBack(new TypeError('argument should have been a string'));
  }

  fs.stat(fileName, (err, stats) => {
    if(err) {
      return mycallBack(err);
    }

    mycallBack(null, stats.size);
  });
}

fileSize(__filename, (err, size) => {
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello, Multiverse');
