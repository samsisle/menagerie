/**
 * Source : https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Author : jitsbit
 * Date   : 2019-08-06
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 *
 * I am still practically clueless when it comes to recursion...
 */

function findTarget(root, k) {
  let hashMap = new Map();

  // depth first search in a Binary Search Tree
  function dfs(root, k, hashMap) {
    if (!root || root === null) return false;
    if (hashMap.has(k - root.val)) return true;

    // keep track of values
    hashMap.set(root.val);

    return dfs(root.left, k, hashMap) || dfs(root.right, k, hashMap);
  }

  return dfs(root, k, hashMap);
}
