/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-05)
 * Problem: IPv4 Validator
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-05
 *
 * Given a string, determine if it is a valid IPv4 Address.
 * Rules:
 * - Four integer numbers separated by dots (.)
 * - Each number must be between 0 and 255 inclusive
 * - No leading zeros (except for "0")
 * - Only numeric characters are allowed
 */

function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  const arr = parts.map(Number);

  if (arr.length === 4) {
    let i = 0;
    while (i < 4 && arr[i] >= 0 && arr[i] <= 255) {
      if (
        parts[i] === "" || // empty part
        Number.isNaN(arr[i]) || // not a number
        (parts[i].length > 1 && parts[i][0] === "0") // leading zeros
      ) {
        return false;
      }
      i++;
    }
    return i === 4; // valid only if all 4 checked
  } else {
    return false;
  }
}

// Example test cases
console.log(isValidIPv4("192.168.1.1"));    // true
console.log(isValidIPv4("0.0.0.0"));        // true
console.log(isValidIPv4("255.01.50.111"));  // false
console.log(isValidIPv4("192.168.101."));   // false
