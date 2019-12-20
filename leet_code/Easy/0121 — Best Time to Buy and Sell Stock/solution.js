/**
 * Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Author : samsisle
 * Date   : 2019-12-22
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function maxProfit(prices) {
  let minPrice = Infinity;
  let max = 0;

  for (let price of prices) {
    // Looks cleaner than writing if elses
    minPrice = Math.min(minPrice, price);
    max = Math.max(max, price - minPrice);
  }

  return maxProfit;
}
