/**
 * Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Author : samsisle
 * Date   : 2019-11-09
 *
 * Time Complexity  :  O(n)
 * Space Complexity :  O(min(m, n))
 */

function lengthOfLongestSubstring(S) {
  if (S.length < 2) return S.length;

  let max = 0;
  let map = new Map();

  // unique two pointer strategy with a hash map
  for (let j = 0, i = 0; j < S.length; j++) {
    // increment i if we encounter same letter
    if (map.has(S[j])) {
      i = Math.max(map.get(S[j]), i);
    }

    // find max, set / replace s[j] value
    max = Math.max(max, j - i + 1);
    map.set(s[j], j + 1);
  }

  return max;
}
