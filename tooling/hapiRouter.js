// to run hapiRouter
// $ nohup node hapiRouter.js &
const Hapi = require('hapi'),
    fsExtra = require('fs-extra'),
    spawn = require('child_process').exec,
    shell = require('shelljs'),
    path = require('path');

const server = new Hapi.Server({
    port: 3000
});

server.route({
    method: 'GET',
    path: '/checkDHCPenabled',
    handler: function(req, h) {
        var output = spawn('./runTest.sh', function(error, stdout, stderr) {
            return console.log(stdout);
        });
        return output.stdout;
    }
});

server.route({
    method: 'GET',
    path: '/checkSUB_NET',
    handler: function(req, h) {
        var output = spawn('./runTestSubNET.sh', function(error, stdout, stderr) {
            return console.log(stdout);
        });
        return output.stdout;
    }
});

server.route({
    method: 'GET',
    path: '/checkTFTP/{value?}',
    handler: function(req, h) {
        if (req.params.value == 'zero') {
            var output = spawn('./runTest_TFTP0.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else if (req.params.value == 'fifteen') {
            var output = spawn('./runTest_TFTP15.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else
            var output = spawn('./hello3.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });
        return output.stdout;
    }
});

server.route({
    method: 'GET',
    path: '/DHCP/{onoff?}',
    handler: function(req, h) {
        if (req.params.onoff == 'on') {
            var output = spawn('./turnON_DHCP.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else if (req.params.onoff == 'off') {
            var output = spawn('./turnOFF_DHCP.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else
            var output = spawn('./hello3.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });
        return output.stdout;
    }
});

server.route({
    method: 'GET',
    path: '/setTFTP/{zerofifteen?}',
    handler: function(req, h) {
        if (req.params.zerofifteen == 'zero') {
            var output = spawn('./setTFTP_0.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else if (req.params.zerofifteen == 'fifteen') {
            var output = spawn('./setTFTP_15.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });

            return output.stdout;
        } else
            var output = spawn('./hello3.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });
        return output.stdout;
    }
});

server.route({
    method: 'GET',
    path: '/DHCPD_RANGE0/{key}/{opt}/{opt2}/{opt3}/{opt4}',
    handler: function(req, h) {
        if (req.params.key == 'ETH_IF') {
            var output = spawn('./ETH_IF.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'NAME') {
            var output = spawn('./NAME.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'SUBNET_MASK') {
            var output = spawn('./SUBNET_MASK.sh ' + req.params.opt + req.params.opt2 + req.params.opt3 + req.params.opt4, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'RANGE0_ENABLE') {
            var output = spawn('./RANGE0_ENABLE.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'TFTP_NAME') {
            var output = spawn('./TFTP_NAME.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'TFTP_IP') {
            var output = spawn('./TFTP_IP.sh ' + req.params.opt + req.params.opt2 + req.params.opt3 + req.params.opt4, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'ROUTER_IP') {
            var output = spawn('./ROUTER_IP.sh ' + req.params.opt + req.params.opt2 + req.params.opt3 + req.params.opt4, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'DEFAULT_LEASE') {
            var output = spawn('./DEFAULT_LEASE.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'START') {
            var output = spawn('./START.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'NTP_IP') {
            var output = spawn('./NTP_IP.sh ' + req.params.opt + req.params.opt2 + req.params.opt3 + req.params.opt4, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'END') {
            var output = spawn('./END.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'COMMENT') {
            var output = spawn('./COMMENT.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'DNS_IP') {
            var output = spawn('./DNS_IP.sh ' + req.params.opt + req.params.opt2 + req.params.opt3 + req.params.opt4, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'NAME') {
            var output = spawn('./NAME.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'IP_RECLAIM') {
            var output = spawn('./testIPreclaim.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'MAX_LEASE') {
            var output = spawn('./MAX_LEASE.sh ' + req.params.opt, function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else if (req.params.key == 'checkDHCPinfo') {
            var output = spawn('./dhcpdINFO.sh ' + req.params.opt, function(error, stdout, stderr) {
                  return console.log(stdout);
              });
              return output.stdout;

        } else if (req.params.key == 'checkReservations') {
            var output = spawn('./RESERV.sh', function(error, stdout, stderr) {
                return console.log(stdout);
              });
              return output.stdout;

        } else if (req.params.key == 'checkActiveLeases') {
            var output = spawn('./runTestActiveLeases.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });
            return output.stdout;

        } else
            var output = spawn('./hello3.sh', function(error, stdout, stderr) {
                return console.log(stdout);
            });
        return output.stdout;
    }
});

async function startServer() {
    await server.start();
    console.log('Go to : 192.168.79.28:' + server.info.port);
}

startServer();
