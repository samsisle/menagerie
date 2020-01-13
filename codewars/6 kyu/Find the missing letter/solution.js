/**
 * Source : https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 * Author : samsisle
 * Date   : 2020-01-13
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

function findMissingLetter(A) {
  let prevCodePoint = A[0].codePointAt(0);

  for (let i = 1; i < A.length; i++) {
    const currCodePoint = A[i].codePointAt(0);

    if (prevCodePoint + 1 === currCodePoint) {
      prevCodePoint = currCodePoint;
    } else {
      return String.fromCodePoint(prevCodePoint + 1);
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // e
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // P
