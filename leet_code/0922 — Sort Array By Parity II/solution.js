/**
 * Source : https://leetcode.com/problems/sort-array-by-parity-ii/
 * Author : samsisle
 * Date   : 2019-08-16
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let even = 0;
  let odd = 1;
  let output = Array(A.length).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      output[even] = A[i];
      even += 2;
    } else {
      output[odd] = A[i];
      odd += 2;
    }
  }

  return output;
};
