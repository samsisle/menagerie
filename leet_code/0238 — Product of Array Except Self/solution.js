/**
 * Source : https://leetcode.com/problems/product-of-array-except-self/
 * Author : samsisle
 * Date   : 2019-08-13
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const performance = require('../../performance');

function productExceptSelf(nums) {
  let output = [];
  let product = 1;

  // find products of left side
  for (num of nums) {
    output.push(product);
    product *= num;
  }
  product = 1;

  // multiple products from right side
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
}

// left side products <-> right side products
// (1)  2.  3.  4. = 24
//  1. (2)  3.  4. = 12
//  1.  2. (3)  4. = 8
//  1.  2.  3. (4) = 6

// after first loop of getting the product of the left-side
// output = [1, 1, 2, 6]

performance.test(() => productExceptSelf([1, 2, 3, 4]));
