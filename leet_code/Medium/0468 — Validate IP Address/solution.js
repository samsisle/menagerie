/**
 * Source : https://leetcode.com/problems/validate-ip-address/
 * Author : samsisle
 * Date   : 2019-12-14
 *
 * Time Complexity  : approx O(n)
 * Space Complexity : O(1)
 */

function validIPAddress(IP) {
  if (IP.indexOf('.') > 0) {
    return IPv4(IP) ? 'IPv4' : 'Neither';
  } else {
    return IPv6(IP) ? 'IPv6' : 'Neither';
  }
}

function IPv4(IP) {
  const nums = IP.split('.');

  if (nums.length !== 4) return false;

  for (let num of nums) {
    if (num.length === 0) return false;
    if (num.match(/[^0-9]/g)) return false;
    if (num.length > 1 && num[0] === '0') return false;
    if (num > 255) return false;
  }

  return true;
}

function IPv6(IP) {
  const hexadecimals = IP.split(':');

  if (hexadecimals.length !== 8) return false;

  for (let h of hexadecimals) {
    if (h.length === 0) return false;
    if (h.length > 4) return false;
    if (h.match(/[^0-9a-fA-F]/g)) return false;
  }

  return true;
}

console.log(validIPAddress('255.16.254.1')); // IPv4
console.log(validIPAddress('1.1.1.1.')); // false
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // IPv6
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334')); // IPv6
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334')); // false
console.log(validIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334')); // false
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:')); // false
console.log(validIPAddress('20EE:Fb8:85a3:0:0:8A2E:0370:7334:12')); // false
