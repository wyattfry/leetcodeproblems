/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    // initialize arr to store idxs of target character
    const targetIndices = [];
    // iterate over each char in S
    for (let i = 0; i < S.length; i += 1) {
        if (S[i] === C) {
            targetIndices.push(i);
        }
    }
    // init output arr
    const output = [];
    // iterate over each char in S
    for (let i = 0; i < S.length; i += 1) {
        let smallest = S.length;
        for (let j = 0; j < targetIndices.length; j += 1) {
            let difference = Math.abs(targetIndices[j] - i);
            smallest = difference < smallest ? difference : smallest;
        }
        output.push(smallest);
    }
    return output;
};