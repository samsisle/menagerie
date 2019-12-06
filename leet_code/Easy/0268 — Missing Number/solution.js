/**
 * Source : https://leetcode.com/problems/missing-number/
 * Author : samsisle
 * Date   : 2019-11-17
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 *
 * This is using Gauss' Formula.
 */

function missingNumber(nums) {
  let len = nums.length;
  let expected_sum = Math.floor((len * (len + 1)) / 2);
  let acutal_sum = nums.reduce((a, b) => a + b, 0);

  return expected_sum - acutal_sum;
}
