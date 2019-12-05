/**
 * Source : https://leetcode.com/problems/valid-palindrome/
 * Author : samsisle
 * Date   : 2019-12-4
 *
 * Time Complexity  : O(2.5n)
 * Space Complexity : O(1)
 */

function isPalindrome(S) {
  const trimS = S.replace(/\W/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(trimS.length / 2); i++) {
    if (trimS[i] !== trimS[trimS.length - i - 1]) {
      return false;
    }
  }

  return true;
}
