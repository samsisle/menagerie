var selfDividingNumbers = function(left, right) {
  let valid = [];
  for (let i = left; i <= right; i++) {
    if (selfD(i)) valid.push(i);
  }
  return valid;
};

var selfD = function(num) {
  var value = num;
  while (value) {
    let digit = value % 10;
    if (num % digit !== 0) return false;
    value = Math.floor(value / 10);
  }
  return true;
};

console.log(selfDividingNumbers(10, 13));
