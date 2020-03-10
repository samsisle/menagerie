/**
 * Source : https://www.spotifyjobs.com/job/react-web-engineer-anchor/
 * Author : samsisle
 * Date   : 2020-03-09
 *
 * Time Complexity  :  O(2n + nlogn)
 * Space Complexity :  O(n^2)
 */

function largestUniqueSetOfRemoveableCharacters(S, min) {
  // generate our frequency array
  const frequencyArray = generateFrequencyArray(S);
  const largestUniqueSet = [];

  let currentNumberOfRemovableCharacters = S.length - min;
  let i = 0;

  // keep iterating and pushing unique characters to our largestUniqueSet
  // Array until the number of removable characters cannot go below 0.
  while (currentNumberOfRemovableCharacters - frequencyArray[i][1] > 0) {
    largestUniqueSet.push(frequencyArray[i][0]);
    currentNumberOfRemovableCharacters -= frequencyArray[i][1];
    i++;
  }

  return largestUniqueSet;
}
function generateFrequencyArray(S) {
  const frequencies = {};

  // generate our frequencies object for the string
  for (const char of S) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  // create a 2d array of [key, value] of the frequencies object
  const frequencyArray = Object.entries(frequencies);

  frequencyArray.sort((a, b) => a[1] - b[1]);

  return frequencyArray;
}

const originalParagraph =
  'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

console.log(largestUniqueSetOfRemoveableCharacters(originalParagraph, 50));
