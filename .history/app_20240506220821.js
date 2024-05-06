const arrays = require('./index.js');
const numbers = [1, 2, 3, 3, 4, 5, null, undefined];

console.log(arrays.sum()(numbers)); 
console.log(arrays.unique()(numbers));
console.log(arrays.compact()(numbers)); 

