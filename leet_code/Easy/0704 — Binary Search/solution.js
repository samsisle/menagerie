/**
 * Source : https://leetcode.com/problems/binary-search/
 * Author : samsisle
 * Date   : 2019-08-08
 *
 * Time Complexity  :  O(log(n))
 * Space Complexity :  O(1)
 */

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

binarySearch([-1, 0, 3, 5, 9, 12], 9);
