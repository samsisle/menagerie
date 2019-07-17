/**
 * Source : https://leetcode.com/problems/self-dividing-numbers/
 * Author : Samuel Ko, hhsu0219
 * Date   : 2019-07-14
 * 
 * Time Complexity  :  ?
 * Space Complexity :  ?
 */

// My solution... very slow

// const selfDividingNumbers = (left, right) => {
//   let output = [];
//   for (let i = left; i <= right; i++) {
//     let arr = [...i + ''].map(n => Number(n));
//     if (arr.every(value => i % value === 0)) output.push(i);
//   }
//   return output;
// }

var selfDividingNumbers = function(left, right) {
  let valid = [];
  for (let i = left; i <= right; i++) {
    if (selfD(i)) valid.push(i);
  }
  return valid;
};

var selfD = function(num) {
  var value = num;
  while (value) {
    let digit = value % 10;
    if (num % digit !== 0) return false;
    value = Math.floor(value / 10);
  }
  return true;
};

console.log(selfDividingNumbers(10, 13));
