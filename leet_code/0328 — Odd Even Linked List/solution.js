/**
 * Source : https://leetcode.com/problems/odd-even-linked-list/
 * Author : samsisle
 * Date   : 2019-11-01
 *
 * Time Complexity  :  O(nodes)
 * Space Complexity :  O(1)
 */

function oddEvenList(head) {
  if (!head || !head.next) return head;

  // still pointers
  const output = head;
  const evenHead = head.next;

  // moving pointers
  let odd = head;
  let even = odd.next;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  // connect the odd nodes with even nodes
  odd.next = evenHead;

  return output;
}
