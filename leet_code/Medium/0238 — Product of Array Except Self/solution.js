/**
 * Source : https://leetcode.com/problems/product-of-array-except-self/
 * Author : samsisle
 * Date   : 2020-01-08
 *
 * Time Complexity  : O(2n)
 * Space Complexity : O(1)
 */

function productExceptSelf(nums) {
  const products = Array(nums.length).fill(1);
  let pL = 1; // left products
  let pR = 1; // right products

  for (let i = 0; i < nums.length; i++) {
    const j = nums.length - 1 - i;

    products[i] *= pL;
    products[j] *= pR;
    pL *= nums[i];
    pR *= nums[j];
  }

  return products;
}

// left side products <-> right side products
// (1)  2.  3.  4. = 24
//  1. (2)  3.  4. = 12
//  1.  2. (3)  4. = 8
//  1.  2.  3. (4) = 6

// after first loop of getting the product of the left-side
// output = [1, 1, 2, 6]

console.log(productExceptSelf([1, 2, 3, 4]));
