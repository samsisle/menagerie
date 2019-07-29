/**
 * Source : https://leetcode.com/problems/fibonacci-number/
 * Author : Samuel Ko
 * Date   : 2019-07-28
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function fib(n) {
  let memo = {};
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      memo[i] = i;
      console.log(`memo[${i}] = ${memo[i]}\n`);
    }
    else {
      memo[i] = memo[i - 1] + memo[i - 2];
      console.log(`memo[${i}] = ${memo[i]}\n`);
    }
  }
  return memo[n];
}

console.log(fib(100));
