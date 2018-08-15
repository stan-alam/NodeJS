'use strict'

const fs = require('fs'),
    fsExtra = require('fs-extra'),
    express = require('express'),
    app = express(),
    spawn = require('child_process').exec,
    shell = require('shelljs'),
    path = require('path')

app.get('/', (req, res) => spawn('MyFile.bat', function(error, stdout, stderr) {
    console.log(stdout);
//this will excute the MyFile.bat, that will run the test and send response
//to CI server -- 
   process.exit(0);
  })
);
