#!/usr/bin/node

function fibs(n) {
  let array = [0, 1];
  n--;
  for (let i = 1; i < n; i++) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }
  return array;
}

function fibsRec(n, array = [0, 1]) {
  if (array.length >= n) {
    return array.slice(0, n);
  } else {
    let result = 0;
    result = array[array.length - 1] + array[array.length - 2];
    array.push(result);
    return fibsRec(n, array);
  }
}

console.log(fibsRec(8));
