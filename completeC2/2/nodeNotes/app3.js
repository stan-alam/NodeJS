console.log('use node version > 4 ');
console.log('start app2');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('username.txt', `Hola, ${user.username}!`);
