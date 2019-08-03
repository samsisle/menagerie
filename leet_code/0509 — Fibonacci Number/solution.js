/**
 * Source : https://leetcode.com/problems/fibonacci-number/
 * Author : samsisle
 * Date   : 2019-07-28
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../performance');

function fib(n) {
  let memo = {};
  for (let i = 0; i <= n; i++) {
    if (i <= 1) memo[i] = i;
    else memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

// Slow as hell recursive method
// function fib(num) {
//   if (num <= 1) return 1;
//   return fib(num - 1) + fib(num - 2);
// }

performance.test(() => fib(42));
