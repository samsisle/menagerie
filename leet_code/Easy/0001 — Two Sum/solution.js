/**
 * Source : https://leetcode.com/problems/two-sum/
 * Author : samsisle
 * Date   : 2019-01-12
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // using simple algebraic math, we can
    // calculate whether any of the visted numbers
    // + nums[i] will equal to the target
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    // keep track of visited numbers
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
