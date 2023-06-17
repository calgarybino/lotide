const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
