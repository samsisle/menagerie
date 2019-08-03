/**
 * Source : https://leetcode.com/problems/implement-strstr/
 * Author : samsisle
 * Date   : 2019-07-13
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const strStr = (haystack, needle) => {
  if (needle.length === 0 || haystack === needle) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};

console.log(strStr('', '')); // 0
console.log(strStr('', 'a')); // -1
console.log(strStr('sam', 'sam')); // 0
console.log(strStr('aaa', 'a')); // 0
console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('mississippi', 'pi')); // 9
