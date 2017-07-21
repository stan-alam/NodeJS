console.log('starting appjs');

const fs = require('fs');

fs.appendFile('Universe.txt', 'Hello, Universe!');

fs.appendFile('Multiverses.txt', 'Hello, Multiverses!', function (err) {
  if (err) {
    console.log('theres been an error');
  }
});
