// Helper function to compare arrays for equality
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function to assert whether two arrays are equal
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } 
  return results;
};

// Test case 1: Mapping words to their lengths
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

// Test case 2: Mapping numbers to their squares
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, (num) => num * num);
assertArraysEqual(results2, [1, 4, 9, 16, 25]);

// Test case 3: Mapping strings to uppercase
const strings = ["hello", "world", "map", "function"];
const results3 = map(strings, (str) => str.toUpperCase());
assertArraysEqual(results3, ["HELLO", "WORLD", "MAP", "FUNCTION"]);
