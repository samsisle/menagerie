/**
 * Source : https://leetcode.com/problems/lru-cache/
 * Author : samsisle
 * Date   : 2019-11-26
 *
 * Time Complexity  : O(1)
 * Space Complexity : O(capacity)
 */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = this.tail = null;
  }

  ensureLimit() {
    if (this.map.size === this.capacity) {
      this.remove(this.tail.key);
    }
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.remove(key);
      this.put(key, node.val);

      return node.val;
    }

    return -1;
  }

  remove(key) {
    const node = this.map.get(key);

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    this.map.delete(key);
  }

  put(key, val) {
    if (this.map.has(key)) {
      this.remove(key);
      this.put(key, val);
    } else {
      this.ensureLimit();

      if (!this.head) {
        this.head = this.tail = new Node(key, val);
      } else {
        let node = new Node(key, val);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    }

    this.map.set(key, this.head);
  }
}
