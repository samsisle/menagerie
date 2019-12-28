/**
 * Source : https://leetcode.com/problems/longest-palindromic-substring/
 * Author : samsisle
 * Date   : 2019-12-26
 *
 * Time Complexity  : O(2n)
 * Space Complexity : O(1)
 */

// I am confident that this solution has much better
// space complexity than manacher's algorithm
function longestPalindrome(S) {
  if (S.length < 2) return S; // base cases

  let maxL = 0; // max left boundary
  let maxR = 0; // max right boundary
  let maxPalindromicLength;
  let L = 0; // current left boundary
  let R = 0; // current right boundary
  let maxIndex = S.length - 1;
  let i = 0; // main iterator

  while (i < S.length) {
    // reset current left and right boundaries
    L = i;
    R = i;

    // move the right boundary first if there are duplicates
    while (R < maxIndex && S[R] === S[R + 1]) {
      R++;
    }

    i = R + 1; // move main iterator to the right of the right boundary

    // expand both the left and right boundaries
    while (L > 0 && R < maxIndex && S[L - 1] === S[R + 1]) {
      L--;
      R++;
    }

    maxPalindromicLength = maxR - maxL;

    // if current boundary length is greater than max boundary length
    // OR: if current palindrome is longer than max palindrome
    if (R - L > maxPalindromicLength) {
      maxL = L;
      maxR = R;

      // if we reached max possible palindrome, we can
      // return our string; cuts down on unecessary loops
      if (maxPalindromicLength === maxIndex) {
        return S;
      }
    }
  }

  return assembleStr(S, maxL, maxR);
}

// generate our largest palindrome from start & end indices
function assembleStr(S, start, end) {
  let str = '';

  for (let i = start; i <= end; i++) {
    str += S[i];
  }

  return str;
}

console.log(longestPalindrome('ababad'));
