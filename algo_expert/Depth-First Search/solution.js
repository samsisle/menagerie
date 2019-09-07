/**
 * Source : https://www.algoexpert.io/questions/Depth-first%20Search
 * Author : samsisle
 * Date   : 2019-09-06
 *
 * Time Complexity  : O(vertices + edges)
 * Space Complexity : O(vertices)
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // iterative solution
  depthFirstSearch(array) {
    let stack = [this];
    let visited = new Map();
    let currentNode;

    visited.set(this, true);

    while (stack.length) {
      currentNode = stack.pop();
      array.push(currentNode.name);

      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        if (!visited.has(currentNode.children[i])) {
          visited.set(currentNode.children[i], true);
          stack.push(currentNode.children[i]);
        }
      }
    }

    return array;
  }
}
