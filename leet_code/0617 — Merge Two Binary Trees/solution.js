/**
 * Source : https://leetcode.com/problems/merge-two-binary-trees/
 * Author : samsisle
 * Date   : 2019-10-29
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

function mergeTrees(t1, t2) {
  // return the other if one doesn't exist;
  // will return null if both t1 and t2 are null
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val;

  // start recursion here
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
}
