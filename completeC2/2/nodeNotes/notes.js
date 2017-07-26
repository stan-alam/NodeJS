console.log('starting nodesjs');

// module.exports.addNote = function() { } this is an ES5
// module.exports.addNote = () => { // this is ECS6 arrow function
//   console.log('addNote');
//   return 'New note';
//   };
//

module.exports.add = (a, b) => {
  var sum = a + b;

  console.log('this is the sum', a + b);
  return sum;
}
  //arrow function will not bind this keyword or arguments array
