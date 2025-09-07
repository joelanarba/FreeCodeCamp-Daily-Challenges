/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-07)
 * Problem: Roman Numeral Parser
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-07
 *
 * Given a string representing a Roman numeral, return its integer value.
 *
 * Roman numerals follow these rules:
 * - I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
 * - Read left to right.
 * - If a smaller numeral comes before a larger one, subtract it (IV = 4).
 * - Otherwise, add it normally (VI = 6).
 */

function parseRomanNumeral(numeral) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const arr = numeral.split("");
  let result = 0;

  arr.forEach((cur, index) => {
    const currentValue = values[cur];
    const nextVal = values[arr[index + 1]];

    if (nextVal !== undefined && currentValue < nextVal) {
      // subtract current if it's smaller than next
      result -= currentValue;
    } else {
      // otherwise add normally
      result += currentValue;
    }
  });

  return result;
}

// Example test cases
console.log(parseRomanNumeral("III"));    // 3
console.log(parseRomanNumeral("IV"));     // 4
console.log(parseRomanNumeral("XXVI"));   // 26
console.log(parseRomanNumeral("XCIX"));   // 99
console.log(parseRomanNumeral("CDLX"));   // 460
console.log(parseRomanNumeral("DIV"));    // 504
console.log(parseRomanNumeral("MMXXV"));  // 2025
