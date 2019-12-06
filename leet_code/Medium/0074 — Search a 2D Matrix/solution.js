/**
 * Source : https://leetcode.com/problems/search-a-2d-matrix/
 * Author : samsisle
 * Date   : 2019-08-20
 *
 * Time Complexity  : ?? logn(logn)??
 * Space Complexity : O(1)
 */

const performance = require('../../../performance');

function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  let start = 0;
  let end = matrix.length - 1;

  let endInnerArr = matrix[0].length - 1;

  // modified binary search for the array
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let startValue = matrix[mid][0];
    let endValue = matrix[mid][endInnerArr];

    if (target === startValue || target === endValue) return true;
    else if (target > startValue) {
      if (target > endValue) start = mid + 1;
      else return binarySearch(matrix[mid], target);
    } else end = mid - 1;
  }

  return false;
}

function binarySearch(A, target) {
  let start = 0;
  let end = A.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === A[mid]) return true;
    else if (target > A[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}

performance.test(() =>
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
);
