const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("✅ Assertion Passed: Arrays are equal.");
  } else {
    console.log("❌ Assertion Failed: Arrays are not equal.");
  }
};

module.exports = assertArraysEqual;
