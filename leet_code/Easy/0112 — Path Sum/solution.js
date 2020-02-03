/**
 * Source : https://leetcode.com/problems/path-sum/
 * Author : samsisle
 * Date   : 2020-02-04
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(log(n))
 */

function hasPathSum(root, sum) {
  if (!root) return false;

  const sums = [];

  function dfs(root, currSum = 0) {
    const tempSum = currSum + root.val;

    if (!root.left && !root.right) sums.push(tempSum);
    if (root.left) dfs(root.left, tempSum);
    if (root.right) dfs(root.right, tempSum);
  }

  dfs(root);

  return sums.includes(sum);
}
