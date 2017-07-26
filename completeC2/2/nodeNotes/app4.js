console.log('use node version > 4 ');
console.log('start app4');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);

fs.appendFile('username.txt', `Hola, ${user.username}! You are ${notes.age}`);
