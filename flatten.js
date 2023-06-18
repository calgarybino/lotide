const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

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
assertEqual(flattened, expectedOutput);
module.exports=flatten;