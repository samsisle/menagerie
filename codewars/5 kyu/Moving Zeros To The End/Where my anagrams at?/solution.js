/**
 * Source : https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript
 * Author : samsisle
 * Date   : 2020-01-29
 *
 * Time Complexity  : O(n^2)
 * Space Complexity : O(1)
 */

function anagrams(word, words) {
  return words.filter(currWord => isAnagram(word, currWord)); 
 }
 ​
 function isAnagram(str1, str2) {
   const s1Len = str1.length;
   
   if (s1Len !== str2.length) {
     return false;
   }
 ​
   const alphabet = Array(26).fill(0);
 ​
   for (let i = 0; i < s1Len; i++) {
     alphabet[str1.charCodeAt(i) - 97]++;
     alphabet[str2.charCodeAt(i) - 97]--;
   }
 ​
   return alphabet.every(letter => letter === 0);
 }