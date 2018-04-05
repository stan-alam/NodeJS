const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('☻'))  //listening to data and update progress bar
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Completed'));
