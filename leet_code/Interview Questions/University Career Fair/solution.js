/**
 * Source : https://leetcode.com/discuss/interview-question/374846/Twitter-or-OA-2019-or-University-Career-Fair
 * Author : samsisle
 * Date   : 2020-03-06
 *
 * Time Complexity  :  O(2n + nlogn)
 * Space Complexity :  O(n)
 */

function universityCareerFair(arrival, duration) {
  let maxEvents = 0;
  let t = -Infinity;

  // combine arrival and duration into a 2d array
  const arrDur = arrival.map((num, i) => [num, duration[i]]);

  // sort 2d array by arrival, then duration
  arrDur.sort((a, b) => {
    if (b[0] - a[0] !== 0) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  // calculate the maximum number of events that can be hosted
  for (const [arr, dur] of arrDur) {
    if (arr >= t) {
      maxEvents++;
      t = arr + dur;
    }
  }

  return maxEvents;
}

console.log(universityCareerFair([1, 3, 3, 5, 7], [2, 2, 1, 2, 1])); // 4
console.log(universityCareerFair([1, 2], [7, 3])); // 1
console.log(universityCareerFair([1, 3, 4, 6], [4, 3, 3, 2])); // 2
