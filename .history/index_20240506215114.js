// array-utils.js

/**
 * Returns the sum of all elements in the array.
 * @param {Array} arr - The input array.
 * @returns {number} The sum of all elements.
 */
function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * Returns a new array with all duplicate values removed.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with unique values.
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Returns a new array with all falsy values removed.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with truthy values.
 */
function compact(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns a new array with the specified value removed.
 * @param {Array} arr - The input array.
 * @param {any} value - The value to remove.
 * @returns {Array} A new array with the specified value removed.
 */
function without(arr, value) {
  return arr.filter((val) => val !== value);
}

/**
 * Returns a new array with the elements randomly shuffled.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with shuffled elements.
 */
function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

/**
 * Returns a new array with the elements sorted in ascending order.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with sorted elements.
 */
function sortAsc(arr) {
  return arr.slice().sort((a, b) => a - b);
}

/**
 * Returns a new array with the elements sorted in descending order.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with sorted elements.
 */
function sortDesc(arr) {
  return arr.slice().sort((a, b) => b - a);
}

/**
 * Returns a new array with elements from the left side of the input array.
 * @param {Array} arr - The input array.
 * @param {number} n - The number of elements to take from the left side.
 * @returns {Array} A new array with the first n elements.
 */
function take(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns a new array with elements from the right side of the input array.
 * @param {Array} arr - The input array.
 * @param {number} n - The number of elements to take from the right side.
 * @returns {Array} A new array with the last n elements.
 */
function takeRight(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns a new array with elements from the input array, except for the first n elements.
 * @param {Array} arr - The input array.
 * @param {number} n - The number of elements to drop from the left side.
 * @returns {Array} A new array with elements after the first n elements.
 */
function drop(arr, n = 1) {
  return arr.slice(n);
}

module.exports = {
  sum,
  unique,
  compact,
  without,
  shuffle,
  sortAsc,
  sortDesc,
  take,
  takeRight,
  drop,
};

const utils = require('array-utils');

const numbers = [1, 2, 3, 3, 4, 5, null, undefined];

console.log(utils.sum(numbers)); // Output: 15
console.log(utils.unique(numbers)); // Output: [1, 2, 3, 4, 5]
console.log(utils.compact(numbers)); // Output: [1, 2, 3, 3, 4, 5]