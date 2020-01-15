/**
 * Source : https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Author : samsisle
 * Date   : 2019-01-14
 *
 * Time Complexity  : O(logn)
 * Space Complexity : O(1)
 */

function search(nums, target) {
  if (nums.length === 1) {
    if (target === nums[0]) return 0;
    else return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // if start, mid, or end equals the target
    switch (target) {
      case nums[start]:
        return start;
      case nums[mid]:
        return mid;
      case nums[end]:
        return end;
    }

    // if left side of mid is all sorted
    if (nums[start] <= nums[mid]) {
      if (target > nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // otherwise check which side it should be
      if (target > nums[mid] && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([2, 4, 5, 6, 7, 8, 9, 0, 1], 0));
