process.stdout.write('\u001B[2J\u001B[0;0f'); //again clear node terminal

const server = require('net').createServer(); // here use the createServer method from net module

server.on('connection', socket => {
  console.log('Client is connected!');
  socket.write('Welcome!');
});

server.listen(3000, () => console.log('I am Server'));
