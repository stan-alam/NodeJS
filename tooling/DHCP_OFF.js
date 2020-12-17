'use strict';
var fs = require('fs');
var assert = require('assert');
var request = require('request');
var JWT;

fs.readFile('/tmp/JWT.txt', 'utf8', function(err, JWT) {
    if (err) {
        return console.log(err);
    }
    console.log("JWT from file " + JWT);

    var DHCP_OFF = {
        "key": "DHCPD_ENABLE",
        "value": "NO"
    }

    var url = 'http://0.0.0.0/api/?key=eq.ENABLE'
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JWT,
        'Prefer': 'return=representation'
    };

    request.post({
        url: url,
        headers: headers,
        json: DHCP_OFF
    },
        function(error, response) {
        console.log(response.body);
        console.log(response.statusCode);
    });
});
