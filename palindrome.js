function isPalindrome(str) {
  // Convert the input string to lowercase and remove spaces
  str = str.toLowerCase().replace(/\s/g, "");

  // Reverse the string and compare it to the original
  return str === str.split("").reverse().join("");
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("No lemon no melon")); // true
console.log(isPalindrome("hello"));
