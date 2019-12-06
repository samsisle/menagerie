/**
 * Source : https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * Author : samsisle
 * Date   : 2019-10-21
 *
 * Time Complexity  : O(2n)
 * Space Complexity : O(n)
 */

function postOrder(root) {
  if (!root) return [];

  /**
   * Go down the tree on each of its left child until
   * there are no children. Push parents to stack.
   */

  let stack = [root];
  let output = [];

  while (stack.length) {
    let current = stack.pop();

    if (current.children.length) {
      stack.push(...current.children);
    }

    output.push(current.val);
  }

  return output.reverse();
}
