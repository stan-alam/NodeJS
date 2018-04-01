const util = require('util');

module.exports.puts = util.deprecate(function() {
  for (var i = 0, len = args.length; i < len; i++) {
    process.stdout.write(args[i] +'\n');
  }
}, 'puts: Use console.log');
