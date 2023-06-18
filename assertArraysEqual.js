const eqArrays = require("./eqArrays");

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Assertion Passed: Arrays are equal.");
  } else {
    console.log("❌ Assertion Failed: Arrays are not equal.");
  }
};
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
assertArraysEqual(array1, array2);
const array3 = [1, 2, 3];
const array4 = [1, 2, 4];
assertArraysEqual(array3, array4);

module.exports = assertArraysEqual;
