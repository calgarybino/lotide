const assertEqual = require("./assertEqual");

const countLetters = (str) => {
  let letterCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== " ") {
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};

// Test cases
const result1 = countLetters("hello");
assertEqual(result1["h"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["o"], 1);

const result2 = countLetters("hello world");
assertEqual(result2["h"], 1);
assertEqual(result2["e"], 1);
assertEqual(result2["l"], 3);
assertEqual(result2["o"], 2);
assertEqual(result2["w"], 1);
assertEqual(result2["r"], 1);
assertEqual(result2["d"], 1);

module.exports = countLetters;
