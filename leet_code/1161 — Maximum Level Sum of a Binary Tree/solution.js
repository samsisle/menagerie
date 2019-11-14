/**
 * Source : https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 * Author : samsisle
 * Date   : 2019-11-14
 *
 * Time Complexity  : O(n + values)
 * Space Complexity : O(n)
 */

function maxLevelSum(root) {
  if (!root) return;

  let values = [];
  let max = Number.NEGATIVE_INFINITY;
  let output = 0;

  function traverse(node, level) {
    values[level] = (values[level] || 0) + node.val;

    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }

  traverse(root, 0);

  values.forEach((value, i) => {
    if (value > max) {
      max = value;
      output = i + 1;
    }
  });

  return output;
}
