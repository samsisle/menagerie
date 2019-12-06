/**
 * Source : https://leetcode.com/problems/count-primes/
 * Wiki   : https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * Author : mildog8
 * Date   : 2019-09-08
 *
 * Time Complexity  : O(nloglogn)
 * Space Complexity : O(n)
 */

function countPrimes(n) {
  if (n-- <= 2) return 0;

  const size = Math.floor((n - 3) / 2) + 1;
  let count = 1;
  const notPrime = Array(size);

  for (let i = 0; i < size; i++) {
    if (notPrime[i]) continue;

    // p = 2i + 3
    const p = i * 2 + 3;
    count++;

    // Seive p^2
    // p^2 = (2i + 3)^2 = 4i^2 + 12i + 9
    // The index of p^2 in notPrime is (p^2 - 3) / 2
    for (let j = i * i * 2 + 6 * i + 3; j < size; j += p) {
      notPrime[j] = true;
    }
  }

  return count;
}

console.log(countPrimes(10));
