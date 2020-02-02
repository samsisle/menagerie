/**
 * Source : https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Author : samsisle
 * Date   : 2020-02-04
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function preorderTraversal(root) {
  const output = [];
  const stack = [];

  if (root) {
    stack.push(root);

    while (stack.length > 0) {
      const current = stack.pop();
      output.push(current.val);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  return output;
}
