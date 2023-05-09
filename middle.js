/*const assertEqual = function(actual, expected) {
  if(actual===expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

///// ACTUAL FUNCTION
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));
