const assertArrayEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const flatten = function (array) {
  let flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

const inputArray = [1, 2, [3, 4], 5, [6]];
const expectedOutput = [1, 2, 3, 4, 5, 6];

const flattened = flatten(inputArray);
assertArrayEqual(eqArrays(flattened, expectedOutput), true);
module.exports = flatten;
