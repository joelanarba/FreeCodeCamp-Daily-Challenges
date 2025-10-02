/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-01)
 * Problem: Binary to Decimal
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-01
 *
 * Given a string representing a binary number, return its decimal equivalent as a number.
 *
 * Explanation:
 * - A binary number uses only 0s and 1s.
 * - To convert binary to decimal:
 *   Start from the rightmost digit, multiply each digit by 2^position, and add them together.
 * - Example: "101" = 1*2^2 + 0*2^1 + 1*2^0 = 4 + 0 + 1 = 5
 */

function toDecimal(binary) {
  const digits = binary.split("").map(Number);
  let power = 0;
  let decimal = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    decimal += digits[i] * Math.pow(2, power);
    power++;
  }
  return decimal;
}

// Example test cases
console.log(toDecimal("101"));      // 5
console.log(toDecimal("1010"));     // 10
console.log(toDecimal("10010"));    // 18
console.log(toDecimal("1010101"));  // 85
