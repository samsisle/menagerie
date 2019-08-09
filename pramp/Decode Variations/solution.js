/**
 * Source : https://www.pramp.com/challenge/r1Kw0vwG6OhK9AEGAy6L
 * Author : Samuel Ko
 * Date   : 2019-07-19, 2019-08-08
 *
 * Time Complexity  :  O(n)
 * Space Complexity :  O(1)
 */

const performance = require('../../performance');

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  // not sure where you get the logic to start both at 1 and 1,
  // but the other solutions do something similar -> [1, 1, 0, 0, 0]
  let x = 1;
  let y = parseInt(s[0]) > 0 ? 1 : 0;
  let output = y;

  for (let i = 2; i <= s.length; i++) {
    // for example, in '1262' check 2 and 12, then add to the
    // growing output; x lags behind y, while y becomes the output
    output =
      (isDecodable(s.substring(i - 1, i)) ? y : 0) +
      (isDecodable(s.substring(i - 2, i)) ? x : 0);
    x = y;
    y = output;
  }

  return output;
}

function isDecodable(s) {
  const num = parseInt(s);
  if (s.length === 1) return num > 0;
  return num >= 10 && num <= 26;
}

// where do you find clever solutions like this in one pressure interview setting?
// guess I need more practice...

performance.test(() => numDecodings('1262'));
