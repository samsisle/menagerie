/**
 * Source : https://leetcode.com/problems/binary-tree-paths/
 * Author : samsisle
 * Date   : 2019-08-13
 *
 * Time Complexity  :  ??
 * Space Complexity : O(n)
 */

function binaryTreePaths(root) {
  const strings = [];

  if (!root) return output;

  function dfs(root, str = '') {
    if (!root.left && !root.right) output.push(str + root.val);
    if (root.left) dfs(root.left, str + root.val + '->');
    if (root.right) dfs(root.right, str + root.val + '->');
  }

  // start depth first search
  dfs(root);

  return strings;
}
