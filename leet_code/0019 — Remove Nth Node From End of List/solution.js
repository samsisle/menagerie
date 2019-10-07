/**
 * Source : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Author : samsisle
 * Date   : 2019-10-08
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function removeNthFromEnd(head, n) {
  // base case if there is only 1 node
  if (!head.next) return null;

  let curr = head;
  let nth = head;
  let count = 0;

  // one pass solution to find the location of the nth node
  while (curr) {
    if (count < n + 1) {
      curr = curr.next;
      count++;
    } else {
      curr = curr.next;
      nth = nth.next;
    }
  }

  // remove nth node from end of the linked list
  if (count === n) {
    return head.next;
  } else {
    nth.next = nth.next.next;
    return head;
  }
}
