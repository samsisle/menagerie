/**
 * Source : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Author : samsisle
 * Date   : 2019-10-24
 *
 * Time Complexity  : O(logn)
 * Space Complexity : O(1)
 */

function searchRange(nums, target) {
  return [
    modifiedBinarySearch(nums, target, 1),
    modifiedBinarySearch(nums, target, 2)
  ];
}

function modifiedBinarySearch(A, target, occurrence) {
  let start = 0;
  let end = A.length - 1;
  let output = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === A[mid]) {
      output = mid;

      if (occurrence === 1) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (target < A[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return output;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
