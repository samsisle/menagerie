/**
 * Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Author : samsisle
 * Date   : 2019-12-3
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(log(n))
 */

function maxDepth(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
