/**
 * Source : https://leetcode.com/problems/remove-element/
 * Author : samsisle
 * Date   : 2020-01-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function removeElement(nums, val) {
  let count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
}
