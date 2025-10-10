/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-10)
 * Problem: Launch Fuel (Space Week Day 7)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-10
 *
 * Given a payload mass (in kg), calculate the total amount of fuel required
 * to lift it into orbit, considering that fuel itself adds to the mass.
 *
 * Explanation:
 * - Each 5 kg of total mass requires 1 kg of fuel.
 * - After adding fuel, recalculate the total mass (payload + fuel).
 * - Repeat until the *additional* fuel required is < 1 kg.
 * - Round the final fuel amount to one decimal place.
 *
 * Example:
 *  Payload = 50 → Total fuel = 12.4 kg
 */

function launchFuel(payload) {
  let totalMass = payload;
  let fuel = payload / 5;
  let previousFuel = 0;

  while (fuel - previousFuel >= 1) {
    previousFuel = fuel;
    totalMass = payload + fuel;
    fuel = totalMass / 5;
  }

  return +fuel.toFixed(1);
}

// Example test cases
console.log(launchFuel(50));     // 12.4
console.log(launchFuel(500));    // 124.8
console.log(launchFuel(243));    // 60.7
console.log(launchFuel(11000));  // 2749.8
console.log(launchFuel(6214));   // 1553.4
