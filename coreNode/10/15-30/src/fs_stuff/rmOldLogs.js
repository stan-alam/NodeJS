const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const Day = 24*60*60*1000; // millaseconds in a Day

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    if((Data.now() - stats.mtime.getTime() > 7*Day)) {
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`deleted ${filePath}`);
      });
    }
  });
});
