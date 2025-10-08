/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-08)
 * Problem: Goldilocks Zone (Space Week Day 5)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-08
 *
 * Given the mass of a star, calculate the start and end distances
 * of its "Goldilocks Zone" — the region where liquid water could exist.
 *
 * Explanation:
 * - Luminosity = mass ^ 3.5
 * - Start of zone = 0.95 × √luminosity
 * - End of zone = 1.37 × √luminosity
 * - Round both distances to two decimal places
 *
 * Example:
 * Input: 1
 * Output: [0.95, 1.37]
 */

function goldilocksZone(mass) {
  const luminosity = Math.pow(mass, 3.5);
  const rootLuminosity = Math.sqrt(luminosity);

  const start = +(0.95 * rootLuminosity).toFixed(2);
  const end = +(1.37 * rootLuminosity).toFixed(2);

  return [start, end];
}

// Example test cases
console.log(goldilocksZone(1));   // [0.95, 1.37]
console.log(goldilocksZone(0.5)); // [0.28, 0.41]
console.log(goldilocksZone(6));   // [21.85, 31.51]
console.log(goldilocksZone(3.7)); // [9.38, 13.52]
console.log(goldilocksZone(20));  // [179.69, 259.13]
