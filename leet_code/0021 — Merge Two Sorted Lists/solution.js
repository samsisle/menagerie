/**
 * Source : https://leetcode.com/problems/merge-two-sorted-lists/
 * Author : samsisle
 * Date   : 2019-10-29
 *
 * Time Complexity  :  O(n + m)
 * Space Complexity :  O(1)
 */

function mergeTwoLists(h1, h2) {
  if (!h1) return h2;
  if (!h2) return h1;

  let output;
  let main;
  let off;

  // set the main to the smallest val Node
  if (h1.val <= h2.val) {
    output = h1;
    main = h1;
    off = h2;
  } else {
    output = h2;
    main = h2;
    off = h1;
  }

  // merge linked lists
  while (main.next) {
    if (main.next.val <= off.val) {
      main = main.next;
    } else {
      let temp = main.next;
      main.next = off;
      off = temp;
    }
  }

  // merge last remaining node
  main.next = off;

  return output;
}
