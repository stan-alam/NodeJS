const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./giganticFile.txt');
  src.pipe(res); //here wer'e piping the contents of the file to the res obj
});

server.listen(8888);
