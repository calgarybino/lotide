function without(source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
}
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
