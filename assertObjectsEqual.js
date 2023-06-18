const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
const obj3 = { a: "1", b: 2, c: true };
assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);

module.exports = assertObjectsEqual;
