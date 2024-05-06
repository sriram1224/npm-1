
function sum() {
  return function(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  };
}


function unique() {
  return function(arr) {
    return [...new Set(arr)];
  };
}


function compact() {
  return function(arr) {
    return arr.filter(Boolean);
  };
}


function without(value) {
  return function(arr) {
    return arr.filter((val) => val !== value);
  };
}


function shuffle() {
  return function(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
  };
}


function sortAsc() {
  return function(arr) {
    return arr.slice().sort((a, b) => a - b);
  };
}

function sortDesc() {
  return function(arr) {
    return arr.slice().sort((a, b) => b - a);
  };
}


function take(n) {
  return function(arr) {
    return arr.slice(0, n);
  };
}


function takeRight(n) {
  return function(arr) {
    return arr.slice(-n);
  };
}


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
