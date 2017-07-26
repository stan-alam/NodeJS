# 3
# Using REquire

Modules are **units** of functionality

e.g. math functions can be packaged into a module like stanMath5000

HTTP module for http requests

FS for file I/O

For the project use the FS module, i.e. the fs.appendFile method

> fs.appendFile(file,data[,options],callback)

require allows to load modules.

require is a function that is included with node

e.g.

```javascript

const fs = require('fs');  // this will tell node you will like to fetch
//all of the fs methods

 ```

 **The second module to be used will be OS**

 ```javascript

 console.log('start app');

 const fs = require('fs');
 const os = require('os');

var user = os.userInfo();
console.log(user);

//fs.appendFile

```

to use the OS module in node > 6

```javascript

console.log('use node version > 4 ');
console.log('start app2');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('username.txt', 'Hello, Multiverses' + user.username + '!');

```

or use the EC6 template String :

```javascript

console.log('use node version > 4 ');
console.log('start app2');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('username.txt', `Hola, ${user.username}!`);

```
