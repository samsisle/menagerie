/**
 * Source : https://leetcode.com/problems/valid-anagram/
 * Author : samsisle
 * Date   : 2019-11-10
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let alphabet = Array(26).fill(0);
  const codeA = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - codeA]++;
    alphabet[t.charCodeAt(i) - codeA]--;
  }

  return alphabet.every(letter => letter === 0);
}
