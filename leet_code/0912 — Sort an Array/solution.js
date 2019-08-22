/**
 * Source : https://leetcode.com/problems/sort-an-array/
 * Author : samsisle
 * Date   : 2019-08-21
 *
 * Time Complexity  : O(nlogn)
 * Space Complexity : ??
 */

const performance = require('../../performance');

var quickSort = function(A) {
  if (A.length < 2) return A;
  else {
    let pivot = A[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < A.length; i++) {
      if (A[i] <= pivot) less.push(A[i]);
      else greater.push(A[i]);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

performance.test(() => quickSort([5, 1, 1, 2, 0, 0]));
