function flatten(arr) {
  // Create an empty array to hold the flattened elements
  let flattenedArr = [];

  // Iterate through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // If the element is an array, recursively flatten it and concatenate its elements to the output array
    if (Array.isArray(arr[i])) {
      flattenedArr = flattenedArr.concat(flatten(arr[i]));
    }
    // If the element is not an array, append it directly to the output array
    else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));