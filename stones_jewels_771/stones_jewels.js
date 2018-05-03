// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  // initialize count to 0
  // iterate through 'stones'
  // if each stone is in J
    // increment count
  // return count

  let count = 0;
  for (let i = 0; i < S.length; i += 1) {
    count += J.indexOf(S[i]) >= 0 ? 1 : 0;
  }
  return count;
};

let expect = 3;
let result = numJewelsInStones('aA', 'aAAbbbb');
if (expect === result) {
  console.log('Pass');
} else {
  console.log(`FAIL: expected ${expect}, got ${result}`);
}

expect = 0;
result = numJewelsInStones('z', 'ZZ');
if (expect === result) {
  console.log('Pass');
} else {
  console.log(`FAIL: expected ${expect}, got ${result}`);
}