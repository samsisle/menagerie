/**
 * Source : https://leetcode.com/problems/palindromic-substrings/
 * Author : samsisle
 * Date   : 2019-12-26
 *
 * Time Complexity  : O(2n)
 * Space Complexity : O(1)
 */

// to see an explanation of how we're going through 
// each palindrome, see solution for longest 
// palindromic substring (#5)
function countSubstrings(s) {
  let count = 0;
  let l;
  let r;

  for (let i = 0; i < s.length; i++) {
    count++;
    l = i;
    r = i;

    while (r < s.length && s[r] === s[r + 1]) {
      count++;
      r++;
    }

    while (l > 0 && r < s.length && s[l - 1] === s[r + 1]) {
      count++;
      l--;
      r++;
    }
  }

  return count;
}

console.log(countSubstrings('aaaaa'));
