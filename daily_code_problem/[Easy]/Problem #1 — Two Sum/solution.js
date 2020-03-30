/**
 * Source : https://www.dailycodingproblem.com/...
 * Author : samsisle
 * Date   : 2020-03-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function twoSum(nums, k) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(k - num)) {
      return true;
    }

    set.add(num);
  }

  return false;
}

console.log(twoSum([10, 15, 3, 7], 17));
