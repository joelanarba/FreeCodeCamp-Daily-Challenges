/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-05)
 * Problem: Exoplanet Search (Space Week Day 2)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-05
 *
 * Given a string where each character represents the luminosity reading of a star,
 * determine if an exoplanet has been detected using the transit method.
 *
 * Explanation:
 * - Luminosity readings use characters 0–9 and A–Z.
 *   - '0'–'9' correspond to luminosity levels 0–9.
 *   - 'A'–'Z' correspond to luminosity levels 10–35.
 * - A star is considered to have an exoplanet if **any reading**
 *   is less than or equal to 80% of the average luminosity.
 */

function hasExoplanet(readings) {
  const numbers = [];

  // Convert characters into numerical luminosity levels
  for (let i = 0; i < readings.length; i++) {
    const char = readings[i];
    if (char >= "0" && char <= "9") {
      numbers.push(parseInt(char));
    } else {
      // 'A'.charCodeAt(0) = 65 → should map to 10, so subtract 55
      numbers.push(char.charCodeAt(0) - 55);
    }
  }

  // Calculate the average luminosity
  const average = numbers.reduce((acc, cur) => acc + cur, 0) / readings.length;

  // Check if any reading ≤ 80% of average
  return numbers.some(number => number <= 0.8 * average);
}

// Example test cases
console.log(hasExoplanet("665544554"));             // false
console.log(hasExoplanet("FGFFCFFGG"));             // true
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP")); // false
console.log(hasExoplanet("FREECODECAMP"));           // true
console.log(hasExoplanet("9AB98AB9BC98A"));          // false
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));// true
