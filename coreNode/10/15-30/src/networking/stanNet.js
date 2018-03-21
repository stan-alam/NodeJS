process.stdout.write('\u001B[2J\u001B[0;0f'); //again clear node terminal
let counter = 0;
const server = require('net').createServer(); // here use the createServer method from net module

server.on('connection', socket => {
  socket.id = counter++; //everytime a client connects assign an id, and add to the counter for next socket Id
  console.log('Client is connected!');
  socket.write('Welcome!\n');

  socket.on('data', data => {
    socket.write(`$socket.id}: `);
    console.log('data is', data);
    socket.write('data is ');
    socket.write(data);
  });

  socket.on('end', () => {
    console.log('Client is now disconnected');
  });
});

server.listen(3000, () => console.log('I am Server'));
// use tmux to connect with multiple clients -- i.e. fingers should
//never leave the keyboard! 
