/**
 * Source : https://leetcode.com/problems/group-anagrams/
 * Author : samsisle
 * Date   : 2019-12-11
 *
 * Time Complexity  : O((n * n[i]) + map)
 * Space Complexity : O(map)
 */

// 26 primes to go with 26 letters in the alphabet
const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  107
];

// this function will generate a unique key for each anagram
function generateKey(S) {
  let key = 1;

  for (let i = 0; i < S.length; i++) {
    key *= primes[S.charCodeAt(i) - 97];
  }

  return key;
}

function groupAnagrams(strs) {
  // the map will have a key and an array value for each unqiue anagram
  let map = new map();
  let arr, key;

  for (let i = 0; i < strs.length; i++) {
    key = generateKey(strs[i]);
    arr = map.get(key);

    if (arr === undefined) {
      map.set(key, [strs[i]]);
    } else {
      arr.push(strs[i]);
    }
  }

  return [...map.values()];
}
