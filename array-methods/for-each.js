'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('in order:');
values.forEach((num) => {
  console.log(num);
});
console.log('reverse order:');
values.forEach((_, index, arr) => {
  console.log(arr[arr.length - 1 - index]);
});
