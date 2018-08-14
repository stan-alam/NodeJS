'use strict'

const fs = require('fs'),
    fsExtra = require('fs-extra'),
    express = require('express'),
    app = express(),
    spawn = require('child_process').exec,
    shell = require('shelljs'),
    path = require('path')

app.get('/', (req, res) => res.spawn('MyFile.bat', function(error, stdout, stderr) {
    console.log(stdout);
  })
);
