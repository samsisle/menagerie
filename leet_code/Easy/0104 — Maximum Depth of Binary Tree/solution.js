/**
 * Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Author : samsisle
 * Date   : 2020-02-03
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function maxDepth(root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}
