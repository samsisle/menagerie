/**
 * Source : https://leetcode.com/problems/next-permutation/
 * Author : samsisle
 * Date   : 2019-12-16
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function nextPermutation(nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }

    swap(nums, i, j);
  }

  // reverse everything else to the right of the swap,
  // so that section is sorted. Since we know it's
  // greatest to smallest, we don't have to use sort()
  reverse(nums, i + 1);

  return nums;
}

// swap in-place
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
}

// reverse elements in array
function reverse(A, start) {
  let end = A.length - 1;

  while (start < end) {
    swap(A, start, end);
    i++;
    j--;
  }
}
