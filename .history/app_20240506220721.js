const arrayHofs = require('./index.js');
const numbers = [1, 2, 3, 3, 4, 5, null, undefined];

console.log(arrayHofs.sum()(numbers)); // Output: Sum of all elements
console.log(arrayHofs.unique()(numbers)); // Output: Array with unique values
console.log(arrayHofs.compact()(numbers)); // Output: Array with truthy values
// You can similarly call other functions
