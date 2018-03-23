process.stdout.write('\u001B[2J\u001B[0;0f'); //again clear node terminal
const server = require('net').createServer(); // here use the createServer method from net module
let counter = 0;
let sockets = {};

server.on('connection', socket => {
  socket.id = counter++; //everytime a client connects assign an id, and add to the counter for next socket Id
  sockets[sockets.id] = socket;

  console.log('Client is connected!');
  socket.write('Welcome!\n');

  socket.on('data', data => {
   Object.entries(sockets).forEach(([key, cs])) => {  //the empty value would be key, but there is none
    if (socket.id == key)
      return;
    cs.write(`${socket.id}: `);
  //  console.log('data is', data);
    cs.write(data);
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client is now disconnected');
  });
});

server.listen(3000, () => console.log('I am Server'));
// use tmux to connect with multiple clients -- i.e. fingers should
//never leave the keyboard!
