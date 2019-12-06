/**
 * Source : https://leetcode.com/problems/relative-sort-array/
 * Author : corashina
 * Date   : 2019-08-12
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const performance = require('../../../performance');

function relativeSortArray(arr1, arr2) {
  let doesNotExist = [];
  let map = new Map();

  for (let i = 0; i < arr1.length; i++) {
    // find first occurance index
    let index = arr2.indexOf(arr1[i]);

    // if map doesn't have number
    if (!map.has(arr1[i])) {
      // if num in arr1 exists in arr2
      if (index !== -1) map.set(arr1[i], true);
      // if num in arr1 doesn't exist in arr2, push it to doesNotExist
      else doesNotExist.push(arr1[i]);
      // if map does have number, then push num at its location in arr2
    } else arr2.splice(index, 0, arr1[i]);
  }

  return arr2.concat(doesNotExist.sort((a, b) => a - b));
}

performance.test(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
