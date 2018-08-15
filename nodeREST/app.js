'use strict'

const fs = require('fs'),
    fsExtra = require('fs-extra'),
    express = require('express'),
    app = express(),
    spawn = require('child_process').exec

app.get('/', (req, res) => spawn('MyFile.bat', function(error, stdout, stderr) {
    console.log(stdout);
/*this will excute the MyFile.bat, that will run the test and send response pass/fail status
to a CI server -- incase you're running an isolated network, and don't wish to poison
the in house network
*/
   process.exit(0);
  })
);

app.listen(8888, () => console.log('listening on port 8888'))
