/**
 * Source : https://leetcode.com/problems/swap-nodes-in-pairs/
 * Author : samsisle
 * Date   : 2019-10-29
 *
 * Time Complexity  :  O(n)
 * Space Complexity :  O(1)
 */

function swapPairs(head) {
  if (!head || !head.next) return head;

  let prev = head;
  let current = prev.next;
  let next = current.next;

  // swap
  current.next = prev;

  // swap the next two pairs recursively
  prev.next = swapPairs(next);

  return current;
}
