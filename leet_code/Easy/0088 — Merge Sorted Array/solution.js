/**
 * Source : https://leetcode.com/problems/merge-sorted-array/
 * Author : samsisle
 * Date   : 2019-12-10
 *
 * Time Complexity  : O(m + n)
 * Space Complexity : O(1)
 */

function merge(nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (m < 1) {
      nums1[i] = nums2[n - 1];
      n--;
    } else if (n < 1) {
      nums1[i] = nums1[m - 1];
      m--;
    } else if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m--;
    } else {
      nums1[i] = nums2[n - 1];
      n--;
    }
  }

  return nums1;
}
