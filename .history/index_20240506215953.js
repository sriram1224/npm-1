// array-hofs/index.js

/**
 * Returns a higher-order function that calculates the sum of all elements in the array.
 * @returns {function(Array): number} A higher-order function that returns the sum of all elements.
 */
function sum() {
  return function(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  };
}

/**
 * Returns a higher-order function that removes duplicate values from an array.
 * @returns {function(Array): Array} A higher-order function that returns a new array with unique values.
 */
function unique() {
  return function(arr) {
    return [...new Set(arr)];
  };
}

/**
 * Returns a higher-order function that removes falsy values from an array.
 * @returns {function(Array): Array} A higher-order function that returns a new array with truthy values.
 */
function compact() {
  return function(arr) {
    return arr.filter(Boolean);
  };
}

/**
 * Returns a higher-order function that removes a specified value from an array.
 * @param {any} value - The value to remove.
 * @returns {function(Array): Array} A higher-order function that returns a new array with the specified value removed.
 */
function without(value) {
  return function(arr) {
    return arr.filter((val) => val !== value);
  };
}

/**
 * Returns a higher-order function that shuffles the elements of an array.
 * @returns {function(Array): Array} A higher-order function that returns a new array with shuffled elements.
 */
function shuffle() {
  return function(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
  };
}

/**
 * Returns a higher-order function that sorts the elements of an array in ascending order.
 * @returns {function(Array): Array} A higher-order function that returns a new array with sorted elements.
 */
function sortAsc() {
  return function(arr) {
    return arr.slice().sort((a, b) => a - b);
  };
}

/**
 * Returns a higher-order function that sorts the elements of an array in descending order.
 * @returns {function(Array): Array} A higher-order function that returns a new array with sorted elements.
 */
function sortDesc() {
  return function(arr) {
    return arr.slice().sort((a, b) => b - a);
  };
}

/**
 * Returns a higher-order function that takes elements from the left side of an array.
 * @param {number} n - The number of elements to take from the left side.
 * @returns {function(Array): Array} A higher-order function that returns a new array with the first n elements.
 */
function take(n) {
  return function(arr) {
    return arr.slice(0, n);
  };
}

/**
 * Returns a higher-order function that takes elements from the right side of an array.
 * @param {number} n - The number of elements to take from the right side.
 * @returns {function(Array): Array} A higher-order function that returns a new array with the last n elements.
 */
function takeRight(n) {
  return function(arr) {
    return arr.slice(-n);
  };
}

/**
 * Returns a higher-order function that drops elements from the left side of an array.
 * @param {number} n - The number of elements to drop from the left side.
 * @returns {function(Array): Array} A higher-order function that returns a new array with elements after the first n elements.
 */
function drop(n = 1) {
  return function(arr) {
    return arr.slice(n);
  };
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
