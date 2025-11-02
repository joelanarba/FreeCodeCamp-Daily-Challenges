/**
 * FreeCodeCamp Daily Coding Challenge (2025-11-02)
 * Problem: Infected
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-02
 *
 * On day 0 → 1 computer infected.
 * Each day → infections double.
 * Every 3rd day → after doubling, apply a patch that removes 20% of infected (rounded up).
 * Return total infected after given number of days.
 *
 * Example (Day 3):
 * Before patch: 8 infected.
 * Patched: ceil(8 * 0.2) = ceil(1.6) = 2.
 * After patch: 8 - 2 = 6.
 */
function infected(days) {
  let total = 1;
  for (let i = 1; i <= days; i++) {
    total *= 2;
    if (i % 3 === 0) {
      total -= Math.ceil(total * 0.2);
    }
  }
  return total;
}

console.log(infected(1));  // 2
console.log(infected(3));  // 6
console.log(infected(8));  // 152
console.log(infected(17)); // 39808
console.log(infected(25)); // 5217638
