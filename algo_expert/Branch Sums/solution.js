/**
 * Source : https://www.algoexpert.io/questions/Branch%20Sums
 * Author : samsisle
 * Date   : 2019-01-21
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(depth?)
 */

function branchSums(root) {
  const sums = [];

  function dfs(root, count = 0) {
    if (!root.left && root.right) sums.push(count + root.value);
    if (root.left) dfs(root.left, count + root.value);
    if (root.right) dfs(root.right, count + root.value);
  }

  dfs(root);

  return sums;
}
