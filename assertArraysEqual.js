const eqArrays = require("./eqArrays");
const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const arr1 = [1, 2, 3],
  arr2 = ["a", "b", "c"];
assertEqual(arr1, arr2);
