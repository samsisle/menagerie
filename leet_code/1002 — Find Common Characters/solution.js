/**
 * Source : https://leetcode.com/problems/find-common-characters/
 * Author : samsisle
 * Date   : 2019-08-02
 *
 * Time Complexity  : ??? (approximately/almost n^2) ???
 * Space Complexity : O(1)
 */

const performance = require('../../performance');

function commonChars(arr) {
  let firstStr = arr[0].split(''); // grab the first word

  // start comparing the first word with every other word in the
  // Array arr — if comparingStr has the same character, keep the
  // same character when filtering the first word. Otherwise, the
  // filter will remove that character.
  for (let i = 1; i < arr.length; i++) {
    let comparingStr = arr[i].split('');
    firstStr = firstStr.filter(char => {
      let index = comparingStr.indexOf(char);
      // (comparingStr[index] = true) --> we are modifying the
      // comparingStr array so indexOf does not log the same 
      // indexOf number when we have two of the same characters,
      // for example the character l is located at index of 0 and 4
      // for the word label
      return index > -1 ? (comparingStr[index] = true) : false;
    });
  }
  return firstStr;
}

performance.test(() => commonChars(['bella', 'label', 'roller']));
