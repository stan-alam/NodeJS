'use strict';

var myos = require("os");

	console.log('endianness: ' + myos.endianness());

	console.log('Type: ' + myos.type());

	console.log('The platform: ' + myos.platform());

	console.log('Total system memory: ' + myos.totalmem() + 'bytes');

	console.log('Free memory: ' + myos.freemem() + 'bytes');


