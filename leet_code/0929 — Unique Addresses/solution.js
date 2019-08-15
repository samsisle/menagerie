/**
 * Source : https://leetcode.com/problems/unique-email-addresses/
 * Author : samsisle
 * Date   : 2019-08-14
 *
 * Time Complexity  : O(n^2)
 * Space Complexity : O(n)
 */

/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function(emails) {
  if (emails.length === 0) return 0;

  // do work to every email: split, remove commas, everything after +
  for (let i = 0; i < emails.length; i++) {
    // split
    emails[i] = emails[i].split('@');

    // remove commas
    emails[i][0] = emails[i][0].replace(/\./g, '');

    // if + exists, remove everything + and after
    // this step increases time complexity!
    let index = emails[i][0].indexOf('+');
    if (index !== -1) emails[i][0] = emails[i][0].substring(0, index);

    // join back again
    emails[i] = emails[i].join('@');
  }

  // remove duplicates
  const set = new Set(emails);

  return set.size;
};
