const assertEqual = require("./assertEqual");
const tail = (arr) => {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(words.length, 3);
module.exports = tail;
