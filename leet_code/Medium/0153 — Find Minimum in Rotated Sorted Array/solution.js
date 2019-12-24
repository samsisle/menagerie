/**
 * Source : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Author : samsisle
 * Date   : 2019-12-23
 *
 * Time Complexity  : O(logn)
 * Space Complexity : O(1)
 */

// a modified binary search
function findMin(nums) {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;

  if (nums[end] > nums[start]) return nums[start];

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // searching for the pivot
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid] < nums[mid - 1]) return nums[mid];

    if (nums[mid] > nums[0]) start = mid + 1;
    else end = mid - 1;
  }
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
