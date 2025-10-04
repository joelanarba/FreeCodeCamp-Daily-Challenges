/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-04)
 * Problem: Stellar Classification
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-04
 *
 * Given the surface temperature of a star (in Kelvin),
 * return its stellar classification based on these ranges:
 * - "O": 30,000 K or higher
 * - "B": 10,000 K – 29,999 K
 * - "A": 7,500 K – 9,999 K
 * - "F": 6,000 K – 7,499 K
 * - "G": 5,200 K – 5,999 K
 * - "K": 3,700 K – 5,199 K
 * - "M": 0 K – 3,699 K
 */

function classification(temp) {
  if (temp >= 0 && temp <= 3699) return "M";
  if (temp >= 3700 && temp <= 5199) return "K";
  if (temp >= 5200 && temp <= 5999) return "G";
  if (temp >= 6000 && temp <= 7499) return "F";
  if (temp >= 7500 && temp <= 9999) return "A";
  if (temp >= 10000 && temp <= 29999) return "B";
  if (temp >= 30000) return "O";
}

// Example test cases
console.log(classification(5778));   // G
console.log(classification(2400));   // M
console.log(classification(9999));   // A
console.log(classification(3700));   // K
console.log(classification(6000));   // F
console.log(classification(210000)); // O
