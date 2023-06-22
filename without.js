const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./assertEqual");

const without = (source, itemsToRemove) => {
  return source.filter((item) => !itemsToRemove.includes(item));
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;
