/**
 * Source : https://leetcode.com/problems/move-zeroes/
 * Author : samsisle
 * Date   : 2019-08-14
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function moveZeros(nums) {
  // p equals pointer
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      nums[i] = p === i ? nums[i] : 0;
      p++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
