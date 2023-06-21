const assertEqual = require("./assertEqual");
const tail = (array) => {
  if (array.length === 0) {
    return [];
  }
  return array[array.length - 1];
};

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
module.exports = tail;
