/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-10)
 * Problem: Array Diff
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-10
 *
 * Given two arrays with string values, return a new array containing
 * all the values that appear in only one of the arrays.
 * The returned array should be sorted in alphabetical order.
 */

function arrayDiff(arr1, arr2) {
  // Get items only in arr1
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  // Get items only in arr2
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
  // Combine and sort
  return [...onlyInArr1, ...onlyInArr2].sort();
}

// Example test cases
console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])); 
// ["cherry"]

console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])); 
// ["eight", "four", "six", "two"]

console.log(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])); 
// ["freeCodeCamp", "rocks"]
