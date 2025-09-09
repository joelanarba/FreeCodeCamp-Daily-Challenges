/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-09)
 * Problem: Unique Characters
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-09
 *
 * Given a string, determine if all the characters in the string are unique.
 * Rules:
 * - Uppercase and lowercase letters are considered different characters.
 */

function allUnique(str) {
  return new Set(str).size === str.length;
}

// Example test cases
console.log(allUnique("abc"));       // true
console.log(allUnique("aA"));        // true
console.log(allUnique("hello"));     // false
