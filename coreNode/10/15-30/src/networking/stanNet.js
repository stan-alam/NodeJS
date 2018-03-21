process.stdout.write('\u001B[2J\u001B[0;0f'); //again clear node terminal

const server = require('net').createServer(); // here use the createServer method from net module

server.on('connection', socket => {
  console.log('Client is connected!');
  socket.write('Welcome!\n');

  socket.on('data', data => {
    console.log('data is', data);
    socket.write('data is ');
    socket.write(data);
  });

  socket.on('end', () => {
    console.log('Client is now disconnected');
  });
});

server.listen(3000, () => console.log('I am Server'));
