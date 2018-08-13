'use strict'

const fs = require('fs'),
    fsExtra = require('fs-extra'),
    express = require('express'),
    app = express(),
    sleep = require('system-sleep'),
    spawn = require('child_process').exec,
    shell = require('shelljs'),
    path = require('path'),
    fileExists = require('file-exists');

//Setup Selenium
var logdir = new Date().getTime();

try{
    fs.mkdirSync("logs");
    fs.mkdirSync("screenshots");
} catch(e){
    console.info("logs already created");
}
fs.mkdirSync("logs/"+logdir);

app.get('/', (req, res) => res.spawn('MyFile.bat', function(error, stdout, stderr) {
    console.log(stdout);
  })
);




