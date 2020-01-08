/**
 * Source : https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
 * Author : samsisle
 * Date   : 2020-01-08
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function moveZeros(arr) {
  let p = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[p], arr[i]] = [arr[i], arr[p]];
      p++;
    }
  }

  return arr;
}
