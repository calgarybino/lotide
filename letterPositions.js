const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }

  return results;
};

// Test case
const sentence = "hello";
const result = letterPositions(sentence);
const expected = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
};
assertArraysEqual(result["h"], expected["h"]);
assertArraysEqual(result["e"], expected["e"]);
assertArraysEqual(result["l"], expected["l"]);
assertArraysEqual(result["o"], expected["o"]);
module.exports = letterPositions;
