/**
 * Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Author : samsisle
 * Date   : 2019-08-04
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../performance');

function removeDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

performance.test(() => removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
