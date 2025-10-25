/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-23)
 * Problem: Hidden Treasure
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-23
 *
 * Given a 2D array representing a map of the ocean floor that contains one hidden treasure,
 * and an array representing the dive coordinates, return:
 *  - "Empty" if there’s no treasure at the dive location.
 *  - "Found" if the dive discovers a part of the treasure, but not all.
 *  - "Recovered" if the dive finds the last remaining part of the treasure.
 *
 * Explanation:
 * - Each cell of the map can contain:
 *    "-" → No treasure
 *    "O" → Unfound treasure piece
 *    "X" → Found treasure piece
 * - Update the map in-place when treasure is found by changing "O" to "X".
 * - Then check if any other "O" remains.
 *
 * Example:
 *  Input:
 *    [
 *      ["-", "X"],
 *      ["-", "X"],
 *      ["-", "O"]
 *    ],
 *    [2, 1]
 *  Output: "Recovered"
 */

function dive(map, coordinates) {
  const [row, col] = coordinates;

  // Case 1: Empty cell
  if (map[row][col] === "-") {
    return "Empty";
  }

  // Case 2: Unfound treasure piece
  if (map[row][col] === "O") {
    map[row][col] = "X"; // Mark as found

    // Check if any other treasure piece remains
    const anyTreasureLeft = map.some(row => row.some(cell => cell === "O"));
    return anyTreasureLeft ? "Found" : "Recovered";
  }

  // Case 3: Already found piece
  if (map[row][col] === "X") {
    return "Found";
  }
}

// Example test cases
console.log(
  dive(
    [
      ["-", "X"],
      ["-", "X"],
      ["-", "O"]
    ],
    [2, 1]
  )
); // "Recovered"

console.log(
  dive(
    [
      ["-", "X"],
      ["-", "X"],
      ["-", "O"]
    ],
    [2, 0]
  )
); // "Empty"

console.log(
  dive(
    [
      ["-", "X"],
      ["-", "O"],
      ["-", "O"]
    ],
    [1, 1]
  )
); // "Found"

console.log(
  dive(
    [
      ["-", "-", "-"],
      ["X", "O", "X"],
      ["-", "-", "-"]
    ],
    [1, 2]
  )
); // "Found"

console.log(
  dive(
    [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["O", "X", "X"]
    ],
    [2, 0]
  )
); // "Recovered"
