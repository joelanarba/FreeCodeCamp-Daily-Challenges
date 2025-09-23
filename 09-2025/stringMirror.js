/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-23)
 * Problem: String Mirror
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-23
 *
 * Given two strings, determine if the second string is a mirror of the first.
 * Rules:
 * - A mirror means the second string is the reverse of the first string.
 * - Uppercase and lowercase are treated as distinct characters.
 * - Ignore all non-alphabetical characters (spaces, symbols, numbers, etc.).
 */

function isMirror(str1, str2) {
  return str1.replace(/[^a-zA-Z]/g, '')
             .split('')
             .reverse()
             .join('') === str2.replace(/[^a-zA-Z]/g, '');
}

// Example test cases
console.log(isMirror("helloworld", "helloworld"));   // false
console.log(isMirror("Hello World", "dlroW olleH")); // true
console.log(isMirror("RaceCar", "raCecaR"));         // true
console.log(isMirror("RaceCar", "RaceCar"));         // false
console.log(isMirror("Mirror", "rorrim"));           // false
console.log(isMirror("Hello World", "dlroW-olleH")); // true
console.log(isMirror("Hello World", "!dlroW !olleH"));// true
