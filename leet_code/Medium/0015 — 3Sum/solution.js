/**
 * Source : https://leetcode.com/problems/3sum/
 * Author : samsisle
 * Date   : 2019-12-27
 *
 * Time Complexity  : O(nlogn + ??)
 * Space Complexity : O(??)
 */

function threeSum(A) {
  if (A.length < 3) return [];

  let triplets = [];

  // sorting helps prevent a lot of unecessary lookups
  A = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    // break if first value is already greater than 0
    if (A[i] > 0) break;
    // skip to prevent duplication
    if (i > 0 && A[i] === A[i - 1]) continue;

    let j = i + 1; // two pointers start at the beginning (including i)
    let k = A.length - 1; // since it's sorted, start from the end

    while (j < k) {
      let sum = A[i] + A[j] + A[k];

      if (sum === 0) {
        triplets.push([A[i], A[j], A[k]]);

        // move j and k in skip past duplicates
        while (A[j] === A[j + 1]) j++;
        while (A[k] === A[k - 1]) k--;

        j++;
        k--;
      } else if (sum < 0) {
        j++; // need to increase sum if sum less than 0
      } else {
        k--; // need to decrease sum if sum greater than 0
      }
    }
  }

  return triplets;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
