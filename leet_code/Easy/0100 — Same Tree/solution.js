/**
 * Source : https://leetcode.com/problems/same-tree/
 * Author : samsisle
 * Date   : 2020-01-29
 *
 * Time Complexity  :  O(n)
 * Space Complexity :  O(log(n))
 */

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
