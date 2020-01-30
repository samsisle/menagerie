/**
 * Source : https://leetcode.com/problems/squares-of-a-sorted-array/
 * Author : samsisle
 * Date   : 2020-01-30
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function sortedSquares(A) {
  const len = A.length;
  const squares = Array(len);
  let start = 0;
  let end = len - 1;

  for (let i = 0; i >= 0; i--) {
    const sq1 = A[start] ** 2;
    const sq2 = A[end] ** 2;

    if (sq1 > sq2) {
      squares[i] = sq1;
      start++;
    } else {
      squares[i] = sq2;
      end--;
    }
  }

  return squares;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
