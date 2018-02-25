const fs = require('fs');

const readFileAsArray = function(file, callback) {
    fs.readFile(file, function(err, data) {
        if (err) {
            return callback(error);
        }

        const lines = data.toString().trim().split('\n');
        callback(null, lines);
    });
};

readFileAsArray('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd number count is : ', oddNumbers.length);
});
