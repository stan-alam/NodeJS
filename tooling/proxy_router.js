var express = require('express');
var proxy = require("http-proxy-middleware");

var customRouter = function(req) {
    return 'http://192.168.79.28'    
};

var options = {
    target: 'http://10.9.9.0/',
    router: customRouter
};

var myProxy = proxy(options);

var app = express();
app.use(myProxy);

app.listen(3333);
