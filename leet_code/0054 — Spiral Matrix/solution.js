/**
 * Source : https://leetcode.com/problems/spiral-matrix/
 * Author : samsisle
 * Date   : 2019-08-06
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const performance = require('../../performance');

function spiralMatrix(matrix) {
  let spiralArray = [];
  if (matrix.length === 0) return spiralArray;

  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      spiralArray.push(matrix[startRow][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      spiralArray.push(matrix[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        spiralArray.push(matrix[endRow][i]);
      }
    }
    endRow--;

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        spiralArray.push(matrix[i][startCol]);
      }
    }
    startCol++;
  }

  return spiralArray;
}

performance.test(() => spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

performance.test(() =>
  spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
);
