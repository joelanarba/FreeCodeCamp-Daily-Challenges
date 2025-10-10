/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-09)
 * Problem: Moon Phase (Space Week Day 6)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-09
 *
 * Given a date in the format "YYYY-MM-DD", determine the phase of the moon.
 *
 * Explanation:
 * - Use a simplified 28-day lunar cycle, divided into four phases:
 *   - "New": days 1 - 7
 *   - "Waxing": days 8 - 14
 *   - "Full": days 15 - 21
 *   - "Waning": days 22 - 28
 * - Cycle repeats after day 28.
 * - Use "2000-01-06" as the reference new moon (day 1 of the cycle).
 */

function moonPhase(dateString) {
  const refDate = new Date("2000-01-06").getTime();
  const inputDate = new Date(dateString).getTime();

  // Calculate days difference between input and reference
  const days = Math.floor((inputDate - refDate) / (1000 * 60 * 60 * 24));

  // Determine the lunar day in the 28-day cycle
  const lunarDay = (days % 28) + 1;

  if (lunarDay >= 1 && lunarDay <= 7) return "New";
  if (lunarDay >= 8 && lunarDay <= 14) return "Waxing";
  if (lunarDay >= 15 && lunarDay <= 21) return "Full";
  if (lunarDay >= 22 && lunarDay <= 28) return "Waning";
}

// Example test cases
console.log(moonPhase("2000-01-12")); // New
console.log(moonPhase("2000-01-13")); // Waxing
console.log(moonPhase("2014-10-15")); // Full
console.log(moonPhase("2012-10-21")); // Waning
console.log(moonPhase("2022-12-14")); // New
