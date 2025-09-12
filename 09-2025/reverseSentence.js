/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-09)
 * Problem: Reverse Sentence
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-12
 *
 * Given a string of words, return a new string with the words in reverse order.
 * Rules:
 * - Words can be separated by one or more spaces.
 * - The returned string should only have one space between words.
 */

function reverseSentence(sentence) {
  return sentence.split(/\s+/).reverse().join(" ");
}

// Example test cases
console.log(reverseSentence("world hello")); // "hello world"
console.log(reverseSentence("push commit git")); // "git commit push"
console.log(reverseSentence("npm  install  sudo")); // "sudo install npm"
console.log(reverseSentence("import    default   function  export")); // "export function default import"
