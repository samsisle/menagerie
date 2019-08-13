/**
 * Source : https://leetcode.com/problems/first-missing-positive/
 * Author : samsisle
 * Date   : 2019-07-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)... this needs to be O(1)
 */

const performance = require('../../performance');

function firstMissingPositive(nums) {
  let map = new Map(); // using ES6 new Map
  for (let num of nums) map.set(num, true); // stores the value by key ... map.set(key, value)
  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (!map.has(i)) return i; // if the map doesn't have i, return i
  }
}

performance.test(() => firstMissingPositive([1, 2, 0]));
