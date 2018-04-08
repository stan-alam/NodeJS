const { spawn } = require('child_process');
const child = spawn('find', ['.', '-type', 'f'], {
  stdio: 'inherit'
});
