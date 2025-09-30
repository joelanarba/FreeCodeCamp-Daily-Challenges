/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-30)
 * Problem: Longest Word
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-29
 *
 * Given a sentence, return the longest word in the sentence.
 *
 * Rules:
 * - Ignore periods (.) when determining word length.
 * - If multiple words tie for the longest, return the first one that occurs.
 * - Treat words separated by one or more spaces as valid words.
 */

function getLongestWord(sentence) {
  // Remove punctuation and extra spaces
  const cleanedSentence = sentence
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ");

  // Split the cleaned sentence into words
  const words = cleanedSentence.split(" ");

  // Use reduce to find the longest word
  return words.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );
}

// Example test cases
console.log(getLongestWord("coding is fun")); 
// "coding"
console.log(getLongestWord("Coding challenges are fun and educational.")); 
// "educational"
console.log(getLongestWord("This sentence has multiple long words.")); 
// "sentence"
