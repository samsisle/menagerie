/**
 * Source : https://leetcode.com/problems/trapping-rain-water/
 * Author : samsisle
 * Date   : 2019-10-03
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function trap(height) {
  if (height.length === 0) return 0;

  let total = 0;
  let length = height.length;
  let left_max = Array(length).fill(0);
  let right_max = Array(length).fill(0);

  // set the initial max values for the arrays
  left_max[0] = height[0];
  right_max[length - 1] = height[length - 1];

  for (let i = 1; i < length; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }

  for (let i = length - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }

  // find the Math.min between the values of the arrays
  for (let i = 1; i < length - 1; i++) {
    total += Math.min(left_max[i], right_max[i]) - height[i];
  }

  return total;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
