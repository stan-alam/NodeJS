const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout() => {
  console.log('execute timeout');
  } 0); //set timeout is at 0 milliseconds
  setImmediate(() => {
    console.log('execute setImmediate');
  });
});
/*
$ node setImmediate.js
execute setImmediate
execute setTimeout
$
*/
