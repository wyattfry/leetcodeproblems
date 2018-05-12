// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// Naive approach: convert decimal ints to binary then strings, then iterate through
// with a counter that increments when they differ
// return the counter
// but is there a better way? Dividing by two? Yes.

const hammingDistance = function (x, y) {
  let distance = 0;
  while (x >= 1 || y >= 1) {
    distance += x % 2 === y % 2 ? 0 : 1;
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return distance
}

const assert = (expect, result) => {
  if (expect === result) {
    console.log('Pass');
  } else {
    console.log(`FAIL! Expected ${expect}, but got ${result}`);
  }
}

assert(2, hammingDistance(1, 4));
assert(2, hammingDistance(5, 6));