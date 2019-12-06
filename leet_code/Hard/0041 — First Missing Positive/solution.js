/**
 * Source : https://leetcode.com/problems/first-missing-positive/
 * Author : samsisle
 * Date   : 2019-07-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../../performance');

function firstMissingPositive(A) {
  let i = 0;
  let p = A.length;

  while (i < p) {
    // if correct number at index
    if (A[i] === i + 1) {
      i++;
      // if number negative or zero, greater than p, or duplicate
    } else if (A[i] <= 0 || A[i] > p || A[i] === A[A[i] - 1]) {
      // swap current number with last number
      swap(A, i, p - 1);
      // we don't care about numbers at the end, so decrement p
      p--;
    } else {
      // swap number to correct index
      swap(A, i, A[i] - 1);
    }
  }

  return p + 1;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

performance.test(() => firstMissingPositive([3, 4, -1, 1]));
