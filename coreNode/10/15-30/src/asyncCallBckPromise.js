const fs = require('fs');

const readFileAsArray = function(file, callback = () => {}) { //notice the empty function
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if(err) {
        reject(err);
        return callback(err); // you can see you're still returning, this time with a callback
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
      callback(null, lines);
    });
  });
};

// here's where you make the call
readFileAsArray('./numbers').then(lines => {
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log('odd numbers count:', oddNumbers.length);
})
.catch(console.error);
