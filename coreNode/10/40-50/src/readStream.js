const { Readable } = require('stream'); // implement a readable stream, require a READABLE interface, and construct an object

const inStream = new Readable();

inStream.push('abc, 123');
inStream.push(null);

inStream.pipe(process.stdout);
