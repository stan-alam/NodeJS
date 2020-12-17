'use strict';
var fs = require('fs');
var request = require("request");

var url = 'http://0.0.0.0/api/login'

var headers = {
    'charset' : 'UTF-8',
    'Content-Type' : 'application/json'
  }

var postBody = {
        'username' : '0.0.0.0\\admin',
        'password' : 'admin'
  }

   request.post({ url: url, headers: headers, json: postBody }, function (error, response, body) {

    console.log("response = " + JSON.stringify(response));
    console.log("JWT = " + JSON.stringify(body));
    fs.writeFile("/tmp/JWT.txt", body, function(err) { if(err) {
        return console.log(err);
    }

    })
});
