const countLetters = function (sentence) {
  // Create an empty object to store the letter counts
  const letterCounts = {};

  // Loop over each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // Check if the character is a letter (ignore spaces and other characters)
    if (/[a-zA-Z]/.test(char)) {
      // If the letter is already in the object, increment its count
      if (char in letterCounts) {
        letterCounts[char]++;
        // Otherwise, add the letter to the object with a count of 1
      } else {
        letterCounts[char] = 1;
      }
    }
  }

  // Return the object with the letter counts
  return letterCounts;
};
const sentence = "LHL";
const result = countLetters(sentence);
console.log(result);
