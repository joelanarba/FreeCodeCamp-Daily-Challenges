/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-30)
 * Problem: Phone Number Formatter
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-30
 *
 * Given a string of digits, return the string as a phone number
 * in this format: "+D (DDD) DDD-DDDD".
 */

function formatNumber(number) {
  const arr = number.split("");
  return `+${arr[0]} (${arr.slice(1, 4).join("")}) ${arr.slice(4, 7).join("")}-${arr.slice(7).join("")}`;
}

// Example test cases
console.log(formatNumber("05552340182")); // +0 (555) 234-0182
console.log(formatNumber("15554354792")); // +1 (555) 435-4792
