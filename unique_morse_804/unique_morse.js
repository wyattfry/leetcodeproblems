// Done
const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const uniqueMorseRepresentations = words => {
    const storage = {};
    let counter = 0;
    words.forEach(w => {
        const m = w.split('').map(l => morse[l.charCodeAt() - 97]).join('');
        counter += storage[m] ? 0 : 1;
        storage[m] = true;
    });
    return counter;
}

// Tests
const assert = (expect, result) => {
    if (expect === result) {
        console.log('Pass');
    } else {
        console.log(`FAIL! Expected ${expect}, but got ${result}`);
    }
};

assert('.-', toMorse('a'));
assert('--...-.', toMorse('gin'));
assert('--...-.', toMorse('zen'));
assert('--...--.', toMorse('gig'));
assert('--...--.', toMorse('msg'));
assert(2, uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));