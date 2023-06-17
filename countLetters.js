const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const countLetters = function (sentence) {
  const letterCounts = {};

  for (let char of sentence) {
    if (/[a-zA-Z]/.test(char)) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

  return letterCounts;
};

const sentence = "LHL";
const result = countLetters(sentence);
console.log(result);
