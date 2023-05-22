const assertEqual = require("./assertEqual");
const head = function (arr) {
 /* if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }*/
  return arr[0];
};

// Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([22]), 22);
assertEqual(head([]), undefined);
