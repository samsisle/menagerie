/**
 * Source : https://leetcode.com/problems/maximum-subarray/
 * Author : samsisle
 * Date   : 2019-08-17
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function maxSubArray(A) {
  if (A.length === 0) return 0;
  let sum = 0;

  return A.reduce((max, curr) => {
    sum = curr + (sum > 0 ? sum : 0);
    return Math.max(max, sum);
  }, Number.NEGATIVE_INFINITY);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
