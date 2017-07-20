Window is the global object it stores everything that you have access to, arrays, css manipulation, every variable you create lives in window.

Node has global as the global object.

You can exit using process() and send 0 as the argument

> process.exit(0)


What is node ? just a javascript runtime that runs on the V8 javascript engine, written in C++

## 4

**Why Should I use Node ?**

Uber and Walmart using only nodeJS, more people are using nodeJS for backend. And some frontend apps using nodeJS to compile applications, and engineers using it to build tools and utilities.



**NodeJS uses an event-driven, non-blocking I/O model that makes it lightweight and efficient**

NPM has the largest ecosystem of open source libraries.

I/O is just reading/writing e.g. read/write request in database, or changing a file on HD, or using HTTP 
to fetch pages..etc.

none-blocking I/O is beneficial because the user can be requesting database.read.write and fetching resources through http without 
stopping any other user.

example of blocking 

```javascript

var getUserSync = require('./getUserSync');

var user1 = getUserSync('123');
console.log('user1', user1);

var user2 = getUserSync('321');
console.log('user2', user2);

var sum = 1 + 2;
console.log('The sum is ' + sum);

```


The above shows how a blocking script would function.

You are are able to see that line 36 there is a call to the database, this is an I/O
operation. This means while this is occurring the application is halted/waiting. 

