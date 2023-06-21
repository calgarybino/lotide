const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test case 1: Array with odd number of elements
const arr1 = [1, 2, 3, 4, 5];
const expected1 = [3];
assertArraysEqual(middle(arr1), expected1); // Output: Pass if arrays are equal

// Test case 2: Array with even number of elements
const arr2 = [1, 2, 3, 4];
const expected2 = [2, 3];
assertArraysEqual(middle(arr2), expected2); // Output: Pass if arrays are equal

// Test case 3: Array with 1 element
const arr3 = [1];
const expected3 = [];
assertArraysEqual(middle(arr3), expected3); // Output: Pass if arrays are equal

// Test case 4: Empty array
const arr4 = [];
const expected4 = [];
assertArraysEqual(middle(arr4), expected4); // Output: Pass if arrays are equal

