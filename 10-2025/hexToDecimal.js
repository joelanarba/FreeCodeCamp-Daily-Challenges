/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-11)
 * Problem: Hex to Decimal
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-11
 *
 * Given a hexadecimal string (0-9, A-F), convert it to a decimal integer.
 *
 * Explanation:
 * - Hex digits 0-9 represent 0–9, A-F represent 10–15.
 * - Each digit is multiplied by 16^position from right to left and summed.
 * - Example: "2E" = 2*16 + 14 = 46
 */

function hexToDecimal(hex) {
  let decimal = 0;
  let exponent = 0;

  const numbers = hex.toUpperCase().split('').map(char => {
    if (char >= 'A' && char <= 'F') {
      return char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }
    return Number(char);
  });

  for (let i = numbers.length - 1; i >= 0; i--) {
    decimal += numbers[i] * (16 ** exponent);
    exponent++;
  }

  return decimal;
}

// Example test cases
console.log(hexToDecimal("A"));    // 10
console.log(hexToDecimal("15"));   // 21
console.log(hexToDecimal("2E"));   // 46
console.log(hexToDecimal("FF"));   // 255
console.log(hexToDecimal("A3F"));  // 2623
