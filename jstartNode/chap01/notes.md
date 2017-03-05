**What makes Nodejs different?**

1. it provides a unified language between the back end and front end. This means that all your thinking can be in a single language, with
no cognitive overhead when switching from back end to front end.
Furthermore, it allows for shared code libraries and templates.

2. It's fast, A single core with less than 1GB of RAM is capable of handling 10GB of traffic and one million connected end points. Combining 24 of these into a single machine produces an overall level of throughput that exceeds the capacity of operating systems and TCP/IP stacks. In a properly designed application it's the OS that is the bottleneck, not node.

3. It's nonblocking architecture is made for the real-time web. JS was chosen as a language because it's based on nonblocking callbacks and has a very small core API. This means it was possible to build the entire NODEJS ecosystem around nonblocking packages, of which there are currently in excess of ten thousand. The end result is a platform and ecosystem that architecturally fits perfectly with the modern demands of the real-time web.

Node is a server-side JS platform that consists of a deliberalty minimalist core library alongside a rich ecosystem. It runs atop of the V8 JS engine.
The V8 engine is extremely fast; in fact, it's several times faster than other scripted languages such as Ruby and Python.

The official description talks about the event-driven, non-blocking I/O model. Traditionally, programming is done in a synchronous manner: a line of code is executed, the system waits for the result, ..etc.
At times waiting for a result can take a long time; for example reading from a DB or writing to a network.

In languages such as JAVA and C#, one solution is to spawn a new thread. A thread may be thought of as a lightweight process that performs tasks. Threaded programming can be difficult because multiple threads can be trying to access the same source concurrently.

JS approaches this problem differently. There is only ever a single thread. When doing slow I/O operations such as reading a database, the program does not wait. Instead, it immediately continues to the next line of code. When the I/O operation returns, it triggers a callback function, and the result can be processed.

Computer programs can be generally classified according to whether they are CPU bound or I/O bound. CPU bound problems benefit from an increase in the number of clock cycles available for computation. Prime number calculation is a good example. Node, however, is not designed to deal with CPU bound problems.


“There is a strict requirement that any request calculates for at most,
say, 5ms before returning to the event loop. If you break the 5ms
limit, then your request handler is never run again (request handlers
will be tied to a certain path/method, I think). If your uploaded
server-side JavaScript is stupid and is blocking (… it calculates the
first 10,000 primes) then it will be killed before completion.
...

Web developers need this sort of environment where it is not possible
for them to do stupid things. Ruby, Python, C++, [and] PHP
are all terrible languages for web development because they allow
too much freedom.”
—Ryan Dahl


I/O bound problems are alleviated by increased throughput in I/O such as disk, memory and network bandwidth, and improved data caching. Many problems are I/O bound, and it's not this domain that Node truly shines.  e.g. the C10K problem which poses the dilemma of how to handle ten thousand or more concurrent connections for a web server. Some technologies platforms are ill-equiped for managing this type of capacity and require various patches and workarounds. NODE excels at this task because it's based on a nonblocking, asynch architecture.

Node provides a built-in, bare-bones HTTP server. Built on top of this is Connect, a middleware framework that provides support for cookies, sessions, logging, and compression, to name a few. On top of connect is Express,
which has support for routing, templates (using the Jade templating engine) and view rendering.

What is cloud-based NoSQL?
















