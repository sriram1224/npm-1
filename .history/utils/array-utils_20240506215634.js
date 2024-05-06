const { sum: sumFunction, unique: uniqueFunction, compact: compactFunction } = require('./array-utils');

const numbers = [1, 2, 3, 3, 4, 5, null, undefined];

console.log(sumFunction(numbers)); // Output: 15
console.log(uniqueFunction(numbers)); // Output: [1, 2, 3, 4, 5, null, undefined]
console.log(compactFunction(numbers)); // Output: [1, 2, 3, 3, 4, 5]