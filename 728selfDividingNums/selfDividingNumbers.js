/**
 * @param {number} number
 * @return {number[]}
 */
var toDigits = function(number, digits = []) {
  if (number < 1) {
      return digits;
  }
  return toDigits(Math.floor(number / 10), [number % 10].concat(digits));
}

/**
* @param {number} number
* @return {boolean}
*/
var isSelfDividing = function(number) {
  return toDigits(number).reduce((acc, digit) => (acc && digit !== 0 && number % digit === 0), true);
}

/**
* @param {number} left
* @param {number} right
* @return {number[]}
*/
var selfDividingNumbers = function(left, right) {
  if (left > right) {
      throw "Left value must be less than or equal to right value";
  }
  let current = left;
  const output = [];
  while (current <= right) {
      if (isSelfDividing(current)) {
          output.push(current);
      }
      current += 1;
  }
  return output;
};