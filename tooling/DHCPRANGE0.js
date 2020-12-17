'use strict';
var fs = require('fs');
var assert = require('assert');
var JWT;
var request = require('request');
var argVector = process.argv[2];
var argKey = process.argv[3];

fs.readFile('/tmp/JWT.txt', 'utf8', function(err, JWT) {
    if (err) {
        return console.log(err);
    }
    console.log("JWT from file " + JWT);

    if (!argVector || !argKey) {
        throw Error('must enter param');
    }

    if (argVector == 'NAME') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_NAME = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_NAME",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_NAME
            },
            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);

            });
    } else if (argVector == 'ETH_IF') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_ETH_IF = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_ETH_IF",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_ETH_IF
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'NTP_IP') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_NTP_IP = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_NTP_IP",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_NTP_IP
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'ENABLE') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_ENABLE = {
            "key": "DHCPD_ENABLE",
            "value": argKey
        }

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_ENABLE
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'COMMENT') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_COMMENT = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_COMMENT",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_COMMENT
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'DNS_IP') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_DNS_IP = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_DNS_IP",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_DNS_IP
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'TFTP_IP') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_TFTP_IP = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_TFTP_IP",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_TFTP_IP
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'DOMAIN_NAME') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_DOMAIN_NAME = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_DOMAIN_NAME",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_DOMAIN_NAME
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'MAX_LEASE') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_MAX_LEASE = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_MAX_LEASE",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_MAX_LEASE
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'TFTP_NAME') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_TFTP_NAME = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_TFTP_NAME",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_TFTP_NAME
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'ROUTER_IP') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_ROUTER_IP = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_ROUTER_IP",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_ENABLE
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'RANGE0_ENABLE') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_ENABLE = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_ENABLE",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_ENABLE
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'DEFAULT_LEASE') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_DEFAULT_LEASE = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_DEFAULT_LEASE",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_DEFAULT_LEASE
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'START') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_START = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_START",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_START
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'END') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };

        var SET_DHCPD_RANGE0_END = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_END",
                "value": argKey
            }
        ]
        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_END
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'SUBNET_MASK') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT,
            'Prefer': 'return=representation'
        };
        var SET_DHCPD_RANGE0_SUBNET_MASK = [{
                "key": "DHCPD_ENABLE",
                "value": "YES"
            },
            {
                "key": "DHCPD_RANGE0_SUBNET_MASK",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/api/configuration_keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_DHCPD_RANGE0_SUBNET_MASK
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });
    } else {
        console.log("!! not recognized  " + argVector);
    }
});
