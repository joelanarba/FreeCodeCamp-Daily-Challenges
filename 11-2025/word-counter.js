/**
 * FreeCodeCamp Daily Coding Challenge (2025-11-03)
 * Problem: Word Counter
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-03
 *
 * Given a sentence string, return the number of words in the sentence.
 *
 * Words are defined as any sequence of non-space characters
 * separated by a single space.
 *
 * Example:
 *  "Hello world" → 2 words
 */

function countWords(sentence) {
  return sentence.split(/\s+/).length;
}

// Example test cases
console.log(countWords("Hello world")); // 2
console.log(countWords("The quick brown fox jumps over the lazy dog.")); // 9
console.log(countWords("I like coding challenges!")); // 4
console.log(countWords("Complete the challenge in JavaScript and Python.")); // 7
console.log(countWords("The missing semi-colon crashed the entire internet.")); // 7
