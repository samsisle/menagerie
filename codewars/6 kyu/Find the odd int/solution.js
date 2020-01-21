/**
 * Source : https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 * Author : samsisle
 * Date   : 2019-01-22
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function findOdd(A) {
  return A.reduce((a, c) => a ^ c);
}
