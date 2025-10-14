/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-14)
 * Problem: String Count
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-14
 *
 * Given two strings, determine how many times the second string appears
 * in the first string. The pattern string can overlap in the first string.
 *
 * Example:
 * - "aaa" contains "aa" twice ("aa" from index 0–1 and "aa" from index 1–2).
 *
 * Return:
 * - The number of times the substring appears in the main string.
 */

function count(longString, subString) {
  let count = 0;
  let fromIndex = 0;

  while ((fromIndex = longString.indexOf(subString, fromIndex)) !== -1) {
    count++;
    fromIndex++; // move forward by one to allow overlapping matches
  }

  return count;
}

// Example test cases
console.log(count("abcdefg", "def")); // 1
console.log(count("hello", "world")); // 0
console.log(count("mississippi", "iss")); // 2
console.log(count("she sells seashells by the seashore", "sh")); // 3
console.log(count("101010101010101010101", "101")); // 10


