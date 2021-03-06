/**
 * Source : https://leetcode.com/problems/merge-two-sorted-lists/
 * Author : samsisle
 * Date   : 2020-01-11
 *
 * Time Complexity  :  O(n + m)
 * Space Complexity :  O(1)
 */

function mergeTwoLists(h1, h2) {
  // base cases
  if (!h1) {
    if (h2) {
      return h2;
    } else {
      return null;
    }
  } else if (!h2) {
    return h1;
  }

  let output, main, off;

  // set the main to the smallest val Node
  if (h1.val <= h2.val) {
    output = main = h1;
    off = h2;
  } else {
    output = main = h2;
    off = h1;
  }

  // merge linked lists
  while (main.next) {
    if (main.next.val <= off.val) {
      main = main.next;
    } else {
      // swap main.next with off
      [main.next, off] = [off, main.next];
    }
  }

  // merge last remaining node
  main.next = off;

  return output;
}
