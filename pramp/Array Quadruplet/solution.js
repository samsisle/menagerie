/**
 * Source : https://www.pramp.com/challenge/gKQ5zA52mySBOA5GALj9
 * Author : Samuel Ko
 * Date   : 2019-08-09
 *
 * Time Complexity  :  O(n^3)
 * Space Complexity :  O(1)
 */

const performance = require('../../performance');

function findArrayQuadruplet(arr, s) {
  // if arr length is less than 4
  if (arr.length < 4) return [];

  // sort it from smallest to greatest
  arr.sort((a, b) => a - b);

  // if arr length = 4
  if (arr.length === 4) {
    const sum = arr.reduce((a, b) => a + b);
    if (sum === s) return arr;
    else return [];
  }

  // a, b, c, d will be our 4 pointers
  let d = arr.length - 1;

  for (let a = 0; a < d - 2; a++) {
    for (let b = a + 1; b < d - 1; b++) {
      for (let c = b + 1; c < d; c++) {
        if (arr[a] + arr[b] + arr[c] + arr[d] === s) {
          return [arr[a], arr[b], arr[c], arr[d]];
        }
      }
    }
  }

  // if quadruplet doesn't exist
  return [];
}

performance.test(() =>
  findArrayQuadruplet([1, 2, 3, 4, 5, 9, 19, 12, 12, 19], 40)
);
