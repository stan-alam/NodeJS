const { spawn } = require('child_process');
const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

process.stdin.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});
