/**
 * Source : https://leetcode.com/problems/longest-harmonious-subsequence/
 * Author : haleyysz
 * Date   : 2019-08-02
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const performance = require('../../../performance');

function findLHS(nums) {
  let map = new Map(),
    max = 0;

  // create the map
  for (let n of nums) {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  }

  // iterate through all the keys, and update the max
  // accordingly as we iterate through all keys in the map
  for (let key of map.keys()) {
    if (map.has(key - 1)) {
      max = Math.max(max, map.get(key) + map.get(key - 1));
    }
  }

  return max;
}

performance.test(() => findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
