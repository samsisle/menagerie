/**
 * Source : https://leetcode.com/problems/two-sum/
 * Author : samsisle
 * Date   : 2019-08-05
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../performance');

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (map.has(num)) return [map.get(num), i];
    map.set(nums[i], i);
  }
}

performance.test(() => twoSum([2, 7, 11, 15], 9));
