const assertEqual = require("./assertEqual");

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

// Test cases
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      a: { foo: "bar" },
      b: { foo: "baz" },
      c: { foo: "qux" },
    },
    (x) => x.foo === "baz"
  ),
  "b"
);

assertEqual(
  findKey(
    {
      a: { foo: "bar" },
      b: { foo: "baz" },
      c: { foo: "qux" },
    },
    (x) => x.foo === "quux"
  ),
  undefined
);

assertEqual(
  findKey(
    {
      apple: { color: "red", shape: "round" },
      banana: { color: "yellow", shape: "curved" },
      orange: { color: "orange", shape: "round" },
    },
    (x) => x.shape === "curved"
  ),
  "banana"
);

module.exports = findKey;
