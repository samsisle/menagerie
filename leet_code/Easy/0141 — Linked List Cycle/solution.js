/**
 * Source : https://leetcode.com/problems/linked-list-cycle/
 * Author : samsisle
 * Date   : 2019-08-13
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  let set = new Set();
  
  while (head) {
      if (set.has(head)) return true;
      set.add(head);
      head = head.next;
  }
  
  return false;
};