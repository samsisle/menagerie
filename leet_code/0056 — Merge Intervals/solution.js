/**
 * Source : https://leetcode.com/problems/merge-intervals/
 * Author : samsisle
 * Date   : 2019-10-07
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const performance = require('../../performance');

function merge(A) {
  if (!A.length) return A;

  // Sort intervals from left to right on an x-axis. If result
  // (a[0] - b[0] for ex.) is positive, b is sorted before a.
  A.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

  let prev = A[0];
  let output = [prev];

  // "merge intervals" by modifying the prev array along the way
  for (let curr of A) {
    if (curr[0] <= prev[1]) {
      // find the max between the 2nd values
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      output.push(curr);
      prev = curr;
    }
  }
  
  return output;
}

performance.test(() => merge([[1, 3], [2, 6], [8, 10], [10, 18]]));
