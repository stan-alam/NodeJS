# 3
# Using REquire

Modules are **units** of functionality

e.g. math functions can be packaged into a module like stanMath5000

HTTP module for http requests

FS for file I/O

For the project we will be using the FS module, i.e. the fs.appendFile method

> fs.appendFile(file,data[,options],callback)

require allows to load modules.

require is a function that is included with node

e.g.

```javascript

const fs = require('fs');  // this will tell node you will like to fetch
//all of the fs methods

 ```
