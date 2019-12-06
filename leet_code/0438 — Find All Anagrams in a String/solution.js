/**
 * Source : https://leetcode.com/problems/valid-anagram/
 * Author : samsisle
 * Date   : 2019-12-5
 *
 * Time Complexity  : O(s + p)
 * Space Complexity : O(1)
 */

function findAnagrams(S, P) {
  let output = [];
  let alphabet = new alphabet();

  // map P's letter in alphabet first
  for (let i = 0; i < P.length; i++) {
    alphabet.add(P.charCodeAt(i) - 97);
  }

  for (let i = 0; i < S.length; i++) {
    alphabet.remove(S.charCodeAt(i) - 97);

    // intuitively confusing why it's done this way, but
    // we need to have an add and remove step in every
    // iteration once the "sliding window" moves forward
    if (i >= P.length) {
      alphabet.add(S.charCodeAt(i - P.length) - 97);
    }

    // alphabet.count is how many different letters are present in the store
    if (alphabet.count === 0) {
      output.push(i - P.length + 1);
    }
  }

  return output;
}

function Alphabet() {
  this.store = Array(26).fill(0);
  this.count = 0;
}

Alphabet.prototype.add = function(pos) {
  if (this.store[pos] === 0) this.count++;
  this.store[pos]++;
};

Alphabet.prototype.remove = function(pos) {
  this.store[pos]--;
  if (this.store[pos] === 0) this.count--;
};
