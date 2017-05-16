## Synchronous and Asynchronous Operations Explained

+--->---+   +---->--+  +-->---+  +---->--+
|       |	|	    |  |      |  |       |
|       |   |       |  |      |  |       |
|       |   |	    |  |      |  |       |
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
												|				  |
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
									|       |	|	    |  |      |  |       |
									|  f1   |   |       |  |      |  |  f2   |
									|       |   |	    |  |      |  |       |
									+--+----+   +-------+  +------+  +-------+
									   |  setTimeout(callback, 1000)   | callback()
									   |_______________________________|

									  			time is going by ....



Calling the async function : It starts an *operation outside the event loop* Liken it to Node starting the async operation  and then makes a mental note that when this operations triggers an event, the anonymous function that was passed to the operation needs to be called.

















