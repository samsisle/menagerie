/**
 * Source : https://leetcode.com/problems/linked-list-cycle/
 * Author : samsisle
 * Date   : 2019-01-17
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast) {
    if (!fast.next) {
      return false;
    } else if (slow === fast) {
      return true;
    } else {
      slow = slow.next;
      fast = fast.next.next;
    }
  }

  return false;
}
