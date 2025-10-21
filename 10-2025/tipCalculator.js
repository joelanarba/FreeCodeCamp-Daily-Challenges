/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-20)
 * Problem: Tip Calculator
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-20
 * Given the price of a meal and a custom tip percent, return an array with
 * three calculated tip values: 15%, 20%, and the custom tip.
 *
 * Explanation:
 * - The meal price is provided in the format "$N.NN".
 * - The custom tip percent is provided as a string like "25%".
 * - Calculate tip amounts for 15%, 20%, and the custom value.
 * - Return all three values in "$N.NN" format, rounded to two decimals.
 *
 * Example:
 *  Input: ("$10.00", "25%")
 *  Output: ["$1.50", "$2.00", "$2.50"]
 */

function calculateTips(mealPrice, customTip) {
  const arr = [];
  const tips = [0.15, 0.2, parseFloat(customTip) / 100];
  const mealPriceNum = parseFloat(mealPrice.replace(/[^0-9.]/g, ""));
  
  for (let i = 0; i < tips.length; i++) {
    const tip = (mealPriceNum * tips[i]).toFixed(2);
    arr.push(`$${tip}`);
  }

  return arr;
}

// Example test cases
console.log(calculateTips("$10.00", "25%")); // ["$1.50", "$2.00", "$2.50"]
console.log(calculateTips("$89.67", "26%")); // ["$13.45", "$17.93", "$23.31"]
console.log(calculateTips("$19.85", "9%"));  // ["$2.98", "$3.97", "$1.79"]


