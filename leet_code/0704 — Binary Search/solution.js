/**
 * Source : https://leetcode.com/problems/binary-search/
 * Author : samsisle
 * Date   : 2019-08-08
 *
 * Time Complexity  :  O(log(n))
 * Space Complexity :  O(1)
 */

const performance = require('../../performance');

function binarySearch(nums, target) {
  // it's a great strategy to visualize things with 'pointers'
  // start pointer and end pointer to log indexes
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // I'm actually not sure why both ceiling and floor works...
    const mid = Math.floor((start + end) / 2);
    if (target < nums[mid]) end = mid - 1;
    else if (target > nums[mid]) start = mid + 1;
    else return mid;
  }
  return -1;
}

performance.test(() => binarySearch([-1, 0, 3, 5, 9, 12], 9));
