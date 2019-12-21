/**
 * Source : https://leetcode.com/problems/contains-duplicate/
 * Author : samsisle
 * Date   : 2019-09-06
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function containsDuplicate(nums) {
  // use a map to keep track of visited numbers
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    }

    map.set(num, true);
  }

  return false;
}
