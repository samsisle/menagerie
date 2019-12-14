/**
 * Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Author : samsisle, haleyysz
 * Date   : 2019-08-04
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../../performance');

/**
 * My original solution was not as efficient as haleyysz's solution
 * because removing elements from the array using Array.prototype.slice()
 * is costlier than simply rearranging elements. This is because the 
 * rest of the array's contents will need to be moved to a new index
 * everytime an element is deleted.
 * 
 * function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}
 */

function removeDuplicates(nums) {
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j - 1]) i++;
    else nums[j - i] = nums[j];
  }
  
  return nums.length - i;
}

performance.test(() => removeDuplicates([1, 1, 2]));
performance.test(() => removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
