// /**
//  * FreeCodeCamp Daily Coding Challenge (2025-09-06)
//  * Problem: Matrix Rotate
//  * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-06
//  *
//  * Given a matrix (array of arrays), rotate the matrix 90 degrees clockwise and return it.
//  * 
//  * Example:
//  * Input: [[1, 2], [3, 4]]
//  * Output: [[3, 1], [4, 2]]
//  *
//  * Rules:
//  * - Each column of the original becomes a row in the rotated matrix.
//  * - Traverse columns top-to-bottom, build rows bottom-to-top.
//  **/

function rotate(matrix) {
  const n = matrix.length;
  let rotated = [];

  for (let col = 0; col < n; col++) {
    const newRow = [];
    for (let row = n - 1; row >= 0; row--) {
      newRow.push(matrix[row][col]);
    }
    rotated.push(newRow);
  }

  return rotated;
}

// Example test cases
console.log(rotate([[1]])); // [[1]]
console.log(rotate([[1, 2], [3, 4]])); // [[3, 1], [4, 2]]
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
console.log(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]])); // [[0, 1, 0], [0, 0, 1], [0, 1, 0]]
