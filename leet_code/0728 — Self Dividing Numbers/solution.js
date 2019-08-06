/**
 * Source : https://leetcode.com/problems/self-dividing-numbers/
 * Author : samsisle, hhsu0219
 * Date   : 2019-07-14
 *
 * Time Complexity  :  O(nlog(n))
 * Space Complexity :  O(1)
 */

// My solution... is very slow haha

// const selfDividingNumbers = (left, right) => {
//   let output = [];
//   for (let i = left; i <= right; i++) {
//     let arr = [...i + ''].map(n => Number(n));
//     if (arr.every(value => i % value === 0)) output.push(i);
//   }
//   return output;
// }

const selfDividingNumbers = (left, right) => {
  let valid = [];
  // iterate integers from left to right inclusive
  for (let i = left; i <= right; i++) {
    // if i is a self-dividing number, push i to array valid
    if (selfD(i)) valid.push(i);
  }
  return valid;
};

const selfD = num => {
  var value = num;
  while (value) {
    // a unique way of iterating over every digit in num to see
    // whether the num itself is self-dividing
    let digit = value % 10;
    if (num % digit !== 0) return false;
    value = Math.floor(value / 10);
  }
  return true;
};

console.log(selfDividingNumbers(1, 1000));
