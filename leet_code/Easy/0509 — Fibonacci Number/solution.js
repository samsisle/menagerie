/**
 * Source : https://leetcode.com/problems/fibonacci-number/
 * Author : samsisle
 * Date   : 2020-01-11
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function fibby(n) {
  const memo = { 0: 0, 1: 1 };

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  
  return memo[n];
}

console.log(fibby(42));
