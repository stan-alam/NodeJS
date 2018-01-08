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



```javascript

var getUser = require('./getUser');
	
getUser('123', function (user1) {
	console.log('user1', user1);
});

getUser('321', function (user2) {
	console.log('user2', user2);
});

var sum = 1 + 2;
console.log('The sum is ' + sum);

```


we're starting to getUser function, same as the blocking, starting the request takes time.

starting the request for getUser for user1
We're not printing user1 to the screen, but instead we're getUser for user2

both of these events i.e. the calling of the functions. THese are note I/O intensive.

## using non blocking does not make I/O operations any faster, but it allows you to run
## more than one operation at the same time. 

THe result of the non-blocking is much faster. In Blocking everything happens in order.

We can print the sum before the database has responded. 

We start events by attaching callbacks, we still print out the data for user1, and user2

when the database has been queried. 

**Inside nodejs the event loop attaches a listener for the event to finish, in this case the connection to the database, and when it finishes it calls the callback which is 

```javascript 

	function(userx) {
	
	}

```

**NODEJS is single threaded**

In Blocking context : 

We cannot allow other resources to be accessed unless we have another thread.

NodeJs is single threaded which means it can scale well.

Application runs on one thread, in blocking for each request, you have to beef up the 
CPU resources to build those multiple threads.


**to find some functionality that you would like to import into your node applications use npm**

Usually there is a 3rd party module that is available

**Node is good because its non-blocking**

**Node has a great ecosystem**

Python still has 3rd party modules that are built on blocking, even if it is "non-blocking"







	