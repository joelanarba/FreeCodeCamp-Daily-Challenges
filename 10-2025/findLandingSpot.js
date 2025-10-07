/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-07)
 * Problem: Landing Spot (Space Week Day 4)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-07
 *
 * Given a matrix representing potential landing spots for a rover,
 * find the safest landing spot based on surrounding danger levels.
 *
 * Explanation:
 * - Each cell contains a number from 0–9.
 *   - 0 = potential landing spot
 *   - any number > 0 = dangerous area
 * - The safest spot is the 0 whose **up, down, left, and right neighbors**
 *   have the lowest total danger value.
 * - Ignore out-of-bounds neighbors (edges/corners just have fewer).
 * - Always return the [row, column] of the single safest 0 cell.
 */

function findLandingSpot(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let safestSpot = null;
  let minDanger = Infinity;

  // Loop through all cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Only consider potential landing spots (0s)
      if (matrix[r][c] === 0) {
        let danger = 0;

        // Check each neighbor safely (ignore out-of-bounds)
        if (r > 0) danger += matrix[r - 1][c];        // Up
        if (r < rows - 1) danger += matrix[r + 1][c]; // Down
        if (c > 0) danger += matrix[r][c - 1];        // Left
        if (c < cols - 1) danger += matrix[r][c + 1]; // Right

        // Update if this spot is safer
        if (danger < minDanger) {
          minDanger = danger;
          safestSpot = [r, c];
        }
      }
    }
  }

  return safestSpot;
}

// Example test cases
console.log(findLandingSpot([[1, 0], [2, 0]])); 
// → [0, 1]

console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]])); 
// → [1, 1]

console.log(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]])); 
// → [2, 2]

console.log(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]])); 
// → [2, 1]
