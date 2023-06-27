const assertEqual = require("./assertEqual");
const eqArrays = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    const item1 = array1[i];
    const item2 = array2[i];
    // If both items are arrays, recursively check their equality
    if (Array.isArray(item1) && Array.isArray(item2)) {
      if (!eqArrays(item1, item2)) {
        return false;
      }
    } else if (item1 !== item2) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
