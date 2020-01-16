/**
 * Source : https://leetcode.com/problems/move-zeroes/
 * Author : samsisle
 * Date   : 2020-01-15
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function moveZeros(nums) {
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[p], nums[i]] = [nums[i], nums[p]];
      p++;
    }
  }

  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // 1 3 12 0 0
