/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-12)
 * Problem: Screen Time
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-12
 *
 * Given an array of 7 integers (hours of phone use each day of the week),
 * determine if it is too much screen time based on these constraints:
 * 
 * Rules:
 * - If any single day has 10 hours or more → too much.
 * - If the average of any 3 consecutive days is >= 8 → too much.
 * - If the weekly average is >= 6 → too much.
 */

function tooMuchScreenTime(hours) {
  // 1. Check if any single day has 10+ hours
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) return true;
  }

  // 2. Check if average of any 3 consecutive days >= 8
  for (let i = 0; i < hours.length - 2; i++) {
    const threeDayAvg = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
    if (threeDayAvg >= 8) return true;
  }

  // 3. Check if weekly average >= 6
  const total = hours.reduce((sum, val) => sum + val, 0);
  const avg = total / 7;
  if (avg >= 6) return true;

  return false;
}

// Example test cases
console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])); // false
console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])); // false
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])); // false
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])); // true
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])); // true
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])); // true
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])); // true
