const { spawn } = require('child_process');
const child = spawn('ls');

child.on('exit', function (code, signal) {
  console.log(`child process exited with code ${code}, ${signal}`)}); //here if the command fails, it will signal to Jenkins, and
  //test will be marked as failed.
