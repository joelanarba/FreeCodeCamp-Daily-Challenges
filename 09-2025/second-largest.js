/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-25)
 * Problem: Second Largest
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-25
 *
 * Given an array, return the second largest distinct number.
 * 
 * Rules:
 * - Remove duplicates (distinct numbers only)
 * - Sort the numbers numerically in ascending order
 * - Return the second largest distinct number
 * - If only one distinct number exists, return that number
 */

function secondLargest(arr) {
  const distinctNumbers = [...new Set(arr)].sort((a, b) => a - b);
  return distinctNumbers.length < 2 
    ? distinctNumbers[0] 
    : distinctNumbers[distinctNumbers.length - 2];
}

// Example test cases
console.log(secondLargest([1, 2, 3, 4]));                  // 3
console.log(secondLargest([20, 139, 94, 67, 31]));         // 94
console.log(secondLargest([2, 3, 4, 6, 6]));               // 4
console.log(secondLargest([10, -17, 55.5, 44, 91, 0]));    // 55.5
console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])); // 0
