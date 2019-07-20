/**
 * Source : https://www.pramp.com/challenge/2WBx3Axln1t7JQ2jQq96
 * Author : Samuel Ko
 * Date   : 2019-07-19
 *
 * Time Complexity  :  O(n)
 * Space Complexity :  O(1)
 */

const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0]
];

// Not sure if this is the cleanest solution, but very close to the main solution.
// Going to clean up later...

function findBusiestPeriod(data) {
  let count = 0;
  let timestamp = 0;
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    count = data[i][2] === 1 ? count + data[i][1] : count - data[i][1];
    if (data[i + 1] && data[i][0] === data[i + 1][0]) {
      continue;
    }

    if (count > max) {
      max = count;
      timestamp = data[i][0];
    }
  }
  return timestamp;
}

console.log(findBusiestPeriod(data));
