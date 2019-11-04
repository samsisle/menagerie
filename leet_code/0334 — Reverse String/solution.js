/**
 * Source : https://leetcode.com/problems/reverse-string/
 * Author : samsisle
 * Date   : 2019-11-03
 *
 * Time Complexity  : O(n / 2)
 * Space Complexity : O(1)
 */

function reverseString(S) {
  for (let i = 0; i < Math.floor(S.length / 2); i++) {
    [s[i], s[s.length - i - 1]] = [[s.length - i - 1], s[i]];
  }

  return S;
}
