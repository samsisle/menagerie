/**
 * Source : https://leetcode.com/problems/binary-tree-paths/
 * Author : Jiakang
 * Date   : 2019-08-13
 *
 * Time Complexity  :  ??
 * Space Complexity : O(n)
 */

function binaryTreePaths(root) {
  let output = [];
  if (!root) return output;

  // remember this simple recursion!
  function dfs(root, str) {
    if (!root.left && !root.right) output.push(str + root.val);
    // start to recurse!
    if (root.left) dfs(root.left, str + root.val + '->');
    if (root.right) dfs(root.right, str + root.val + '->');
  }

  // start depth first search
  dfs(root, '');

  return output;
}
