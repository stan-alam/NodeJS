// can't use const in strict mode
var Buffer = require('buffer/').Buffer
const string = 'touché';
const buffer = Buffer.from('touché');

console.log(string, string.length);
console.log(buffer, buffer.length);
