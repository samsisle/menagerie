/**
 * Source : https://leetcode.com/problems/middle-of-the-linked-list/
 * Author : samsisle
 * Date   : 2019-08-01
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../../performance');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(head) {
  let slow = head;
  let fast = head;
  if (!head) return;
  // this specifc conditional is needed so the while loop
  // stops before reaching a TypeError
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next) return slow.next;
  else return slow;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

performance.test(() => middleNode(a));
