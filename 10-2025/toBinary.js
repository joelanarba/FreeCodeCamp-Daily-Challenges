/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-02)
 * Problem: Decimal to Binary
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-02
 *
 * Given a non-negative integer, return its binary representation as a string.
 *
 * Explanation:
 * - A binary number uses only the digits 0 and 1.
 * - To convert decimal to binary manually:
 *   Repeatedly divide the number by 2, record the remainders, then read them backwards.
 * - Example (12 → binary):
 *   12 ÷ 2 = 6 remainder 0
 *   6 ÷ 2 = 3 remainder 0
 *   3 ÷ 2 = 1 remainder 1
 *   1 ÷ 2 = 0 remainder 1
 *   → Binary: 1100
 *
 * Two Approaches:
 * 1. Manual Implementation (Step by Step)
 * 2. Built-in Implementation (Using .toString(2))
 */

// 1. Manual Implementation (Step by Step)
function toBinaryManual(decimal) {
  let quotient = 0;
  let remainder = 0;
  const binary = [];

  while (decimal > 0) {
    quotient = Math.floor(decimal / 2);
    remainder = decimal % 2;
    binary.unshift(remainder);
    decimal = quotient;
  }

  return binary.join('') || '0'; // return "0" if input is 0
}

// 2. Built-in Implementation (Using .toString(2))
function toBinaryBuiltIn(decimal) {
  return decimal.toString(2);
}

// Exports
module.exports = { toBinaryManual, toBinaryBuiltIn };

// Example test cases
console.log(toBinaryManual(5));   // "101"
console.log(toBinaryManual(12));  // "1100"
console.log(toBinaryBuiltIn(50)); // "110010"
console.log(toBinaryBuiltIn(99)); // "1100011"
