// stan's custom repl
const repl = require('repl');

repl.start({
  ignoreUndefined: true, // this will get rid of that pesky undefined stdout
  replMode: repl.REPL_MODE_STRICT // this will default to strict mode
});
