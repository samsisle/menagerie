/**
 * Source : https://www.codewars.com/kata/ticker/train/javascript
 * Author : samsisle
 * Date   : 2019-01-06
 *
 * Time Complexity  : O(text + width)
 * Space Complexity : O(text + 2 * width)
 *
 * Had some fun with this in addition to the challenge.
 */

function scrollingText(text, width) {
  let tick = 0;

  setInterval(() => {
    process.stdout.write(`${createFixedLengthText(text, width, tick)}\r`);
    tick++;
  }, 50);
}

function createFixedLengthText(text, width, tick) {
  const emptySpaces = ' '.repeat(width);
  const str = emptySpaces + text + emptySpaces;
  tick = tick % (text.length + width);

  return str.slice(tick, tick + width);
}

scrollingText(
  '"People love what other people are passionate about." — Mia',
  50
);
