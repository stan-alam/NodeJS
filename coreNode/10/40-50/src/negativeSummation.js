function negativeSummation(...args) {
  return args.reduce((arg, total) => {
    return total-arg;
  }, 0);
}

console.log((negativeSummation, 1, 3, 11));
//this is not working? So lets use the debugger to
//step through the code!
