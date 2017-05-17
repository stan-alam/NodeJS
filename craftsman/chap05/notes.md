## Synchronous and Asynchronous Operations Explained

		+--->---+   +---->--+  +-->---+  +---->--+
		|       |   |       |  |      |  |       |
		|       |   |       |  |      |  |       |
		|       |   |       |  |      |  |       |
		+-------+   +-------+  +------+  +-------+


model as a row of loops

```javascript

while ( I still have stuff to do ) {
	do stuff;
}

```

Conceptually, at its core, it's really simple: **Node starts, loads the application and then loops until there is nothing else left to do, at this point the application**

```javascript

console.log('Hello');
console.log('Multiverse');

```


			+--->-------------+
			|                 |
			| print           |
			|    "Hello"      |
			|    to console   |
			|                 |
			| print           |
			|    "Multiverse" |
			|     to console  |
			|                 |
			|                 |
			+-----------------+

In this model the application writes text to the screen, then writes another text to the screen, using console.log(). These are synchronous operations. They both happen within the same iteration loop.

Now let's look at this model :

```javascript

console.log('Hello'); //f1
setTimeout(function() {
	console.log('Multiverse!'); //f2
}, 1000 );

```

This will print "Hello" and "Multiverse!" on the screen,  but the second text is printed with a delay of 1000ms.

The set **setTimeout** function is an asynchronous operation. The code is passed to be executed in the body of an anonymous function. This anonymous function is called the **callback** function.

		+--->---+   +---->--+  +-->---+  +---->--+
		|       |   |       |  |      |  |       |
		|  f1   |   |       |  |      |  |  f2   |
		|       |   |       |  |      |  |       |
		+--+----+   +-------+  +------+  +-------+
		   |  setTimeout(callback, 1000)   | callback()
		   |_______________________________|

		  		   time is going by ....



Calling the async function : It starts an *operation outside the event loop* Liken it to Node starting the async operation  and then makes a mental note that when this operations triggers an event, the anonymous function that was passed to the operation needs to be called.


*The event loop*:  as long as asynchronous operations are ongoing, the NodeJS process loops, waiting for events from those operations. As soon as there are no more asynch operations are ongoing, the looping stops and the applications terminates.

**Callback functions don't need to be anonymous inline functions:**

```javascript

var printTo_multiverse = function() {  //f1
	console.log('Multiverse!');
};

console.log('Hello'); //f2

setTimeout(printTo_multiverse, 1000);  //f3

```


		+--->---+   +---->--+  +-->---+  +---->--+
		|       |   |       |  |      |  |       |
		|  f2   |   |       |  |      |  |  f1   |
		|       |   |       |  |      |  |       |
		+--+----+   +-------+  +------+  +-------+
		   |  setTimeout(callback, 1000)   | printTo_multiverse()
		   |_______________________________|

		  		   time is going by ....


In loop cycle one : f2, and "Start the setTimout(printTo_multiverse, 1000);"















