        process.stdout.write('\u001B[2J\u001B[0;0f'); //again clear node terminal
        const server = require('net').createServer(); // here use the createServer method from net module
        let counter = 0;
        let sockets = {};

        function timeStamp() {
          const now = new Data();
          return `${now.getHours()}:${now.getMinutes()}`;
        }

        server.on('connection', socket => {
          socket.id = counter++; //everytime a client connects assign an id, and add to the counter for next socket Id

          //sockets[sockets.id] = socket;

          console.log('Client is connected!');
          socket.write('Hi, your name?\n');

          socket.on('data', data => {
            if(!socket[socket.id]) {
              socket.name = data.toString().trim();
              socket.write(`Welcome ... $[socket.name}!\n`);
              sockets[socket.id] = socket;
              return;
            }
           Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key)
              return;
            cs.write(`${socket.name}: ${timeStamp()}: `);
          //  console.log('data is', data);
            cs.write(data);
          });
        });

          socket.on('end', () => {
            delete sockets[socket.id];
            console.log('Client is now disconnected');
          });
        });

        server.listen(3000, () => console.log('I am Server'));
