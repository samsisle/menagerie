/**
 * Source : https://leetcode.com/problems/fibonacci-number/
 * Author : samsisle
 * Date   : 2020-01-11
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function fibbo(n) {
  const memo = {};

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  }
  
  return memo[n];
}

console.log(fibbo(42));
