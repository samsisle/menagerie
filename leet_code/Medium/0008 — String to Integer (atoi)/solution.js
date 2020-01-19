/**
 * Source : https://leetcode.com/problems/string-to-integer-atoi/
 * Author : samsisle
 * Date   : 2019-01-20
 *
 * Time Complexity  : O(time of calculations)
 * Space Complexity : O(1)
 */

function myAtoi(str) {
  const num = parseInt(str);
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = -INT_MIN - 1;

  if (isNaN(num)) {
    return 0;
  } else if (num < INT_MIN) {
    return INT_MIN;
  } else if (num > INT_MAX) {
    return INT_MAX;
  } else {
    return num;
  }
}
