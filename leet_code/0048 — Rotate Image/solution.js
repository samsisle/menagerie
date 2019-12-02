/**
 * Source : https://leetcode.com/problems/rotate-image/
 * Author : samsisle
 * Date   : 2019-12-3
 *
 * Time Complexity  : O(n^2)
 * Space Complexity : O(1)
 */

function rotateImage(matrix) {
  let n = matrix.length;

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  return matrix;
}
