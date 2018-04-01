const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');
const files = fs.readdirSync(dirname);

const logWithTime = (message) =>
  console.log(`${new Date().toUTCString()}: ${message}`);

fs.watch(dirname, (eventType, filename) => {
  if (eventType === 'rename') {
    const index = currentFiles.indexOf(filename);
    if (index >= 0) {
      currentFiles.splice(index, 1);
      logWithTime(`${filename} has been expunged`);
      return;
    }

    currentFiles.push(filename);
    logWithTime(`${filename} has been added`);
    return;
  }

  logWithTime(`${filename} a change has occured`);
});
