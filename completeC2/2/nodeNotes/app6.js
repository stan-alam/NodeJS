console.log('use node version > 4 ');
console.log('start app6');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);

var add = notes.add(3, 4);
console.log(add);
// var user = os.userInfo();
// console.log(user);

// fs.appendFile('username.txt', `Hola, ${user.username}! You are ${notes.age}`);
