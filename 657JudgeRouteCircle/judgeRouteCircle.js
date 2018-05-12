/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;
  const translate = {
    'U': () => x += 1,
    'D': () => x -= 1,
    'R': () => y -= 1,
    'L': () => y += 1,
  };
  for (let i = 0; i < moves.length; i++) {
    translate[moves[i]]();
  }
  return x === 0 && y === 0;
};


// Test
const assert = (expect, result) => {
  if (expect === result) {
    console.log('Pass');
  } else {
    console.log('FAIL! Expected ' + expect + ', but got ' + result);
  }
}

assert(true, judgeCircle('UD'));
assert(false, judgeCircle('LL'));