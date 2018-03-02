async function countEven() {
//  (%) is the modulus operator, it will let you have the remainder of place/sequence.length. taken from stackoverflow
try {
  const lines = await readFileAsArray('./numbers');
  const numbers = lines.map(Number);
  const evenCount = numbers.filter(number => number % 2 !== 1).length
  console.log('even number count is : ', evenCount);
} catch(err) {
  console.error(err);
}
  }
}

countEven(); // wow! async code running synchronously ... good for test automation!
