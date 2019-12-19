/**
 * Source : https://leetcode.com/problems/subsets/
 * Author : samsisle
 * Date   : 2019-12-19
 *
 * Time Complexity  : O(2^n)
 * Space Complexity : O(2^n)
 */

function subsets(nums) {
  let output = [[]];

  for (let i = 0; i < nums.length; i++) {
    let subs = [];

    // iterate through the subsets in the output
    // as we create more of them
    for (let j = 0; j < output.length; j++) {
      subs.push(output[j].concat(nums[i]));
    }

    output = output.concat(subs);
  }

  return output;
}

console.log(subsets([1, 2, 3]));
