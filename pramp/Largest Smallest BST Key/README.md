## Largest Smaller BST Key

Given a root of a [Binary Search Tree (BST)](https://en.wikipedia.org/wiki/Binary_search_tree) and a number `num`, implement an efficient function `findLargestSmallerKey` that finds the largest key in the tree that is smaller than `num`. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

**For example:**

For `num = 17` and the binary search tree below:

![binary search tree example](https://www.pramp.com/img/content/img_02.png)

**Your function would return:**

`14` since it's the largest key in the tree that is still smaller than `17`.

**Constraints:**

- **[time limit] 5000ms**
- **[input] Node** `rootNode`
- **[output] integer**
