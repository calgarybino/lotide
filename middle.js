const assertArrayEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const middle = (array) => {
  const leng = array.length;

  if (leng <= 2) {
    return [];
  }

  const middleIndex = Math.floor(leng / 2);

  if (leng % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};
//I declare those variable more the code to be readable otherwise
// I can pass the expected output
const expectedOutput1 = [];
const expectedOutput2 = [];
const expectedOutput3 = [2];
const expectedOutput4 = [2, 3];
assertArrayEqual(middle([1]), expectedOutput1);
assertArrayEqual(middle([1, 2]), expectedOutput2);
assertArrayEqual(middle([1, 2, 3]), expectedOutput3);
assertArrayEqual(middle([1, 2, 3, 4]), expectedOutput4);
module.exports = middle;
