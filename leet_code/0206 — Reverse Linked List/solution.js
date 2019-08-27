/**
 * Source : https://leetcode.com/problems/reverse-linked-list/
 * Author : samsisle
 * Date   : 2019-08-28
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

var reverseList = function(head) {
  if (!head || !head.next) return head;

  let prev = head;
  let current = prev.next;
  let next = current.next;
  prev.next = null;

  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }

  current.next = prev;

  return current;
};
