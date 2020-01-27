/**
 * Source : https://leetcode.com/problems/find-common-characters/
 * Author : samsisle
 * Date   : 2020-01-21
 *
 * Time Complexity  : O(n^2)
 * Space Complexity : O(1)
 */

function commonChars(arr) {
  let firstStr = arr[0].split('');

  for (let i = 1; i < arr.length; i++) {
    const currStr = arr[i].split('');

    firstStr = firstStr.filter(char => {
      const index = currStr.indexOf(char);

      return index > -1 ? (currStr[index] = true) : false;
    });
  }

  return firstStr;
}

commonChars(['bella', 'label', 'roller']);
