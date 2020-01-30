/**
 * Source : https://leetcode.com/problems/missing-ranges/
 * Author : samsisle
 * Date   : 2020-01-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function findMissingRanges(nums, lower, upper) {
  const missingRanges = [];
  nums = [lower - 1, ...nums, upper + 1];
  const len = nums.length;

  for (let i = 1; i < len; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      missingRanges.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      missingRanges.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return missingRanges;
}
