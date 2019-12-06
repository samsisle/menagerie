/**
 * Source : https://leetcode.com/problems/reverse-words-in-a-string/
 * Author : samsisle
 * Date   : 2019-11-18
 *
 * Time Complexity  :  O(2n??)
 * Space Complexity :  O(1)
 */

function reverseWords(s) {
  // check if string is empty or all whitespaces
  if (!s.length || !s.trim()) return "";

  let output = "";

  // match all words (includes characters that are not Alphanumeric)
  let A = s.match(/[\S]+/g);

  for (let i = A.length - 1; i > 0; i--) {
    output += A[i] + " ";
  }

  return output + A[0];
}
