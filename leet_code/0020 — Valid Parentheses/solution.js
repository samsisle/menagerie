/**
 * Source : https://leetcode.com/problems/valid-parentheses/
 * Author : samsisle
 * Date   : 2019-08-20
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function isValid(s) {
  let stack = [];
  const openers = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const closers = {
    ')': true,
    '}': true,
    ']': true
  };

  for (let parenthesis of s) {
    if (openers[parenthesis]) stack.push(parenthesis);
    else if (closers[parenthesis]) {
      if (openers[stack.pop()] !== parenthesis) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('()[]{}'));
