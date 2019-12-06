/**
 * Source : https://leetcode.com/problems/sum-of-square-numbers/
 * Author : samsisle
 * Date   : 2019-08-19
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

var judgeSquareSum = function(c) {
  if (c <= 1) return true;

  for (let i = 0; i * i <= c; i++) {
    // check if a is a rational number; a = √(c - b^2)
    if (Math.sqrt(c - i * i) % 1 === 0) return true;
  }

  return false;
};

console.log(judgeSquareSum(5)); // true
