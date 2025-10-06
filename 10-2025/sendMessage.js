/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-06)
 * Problem: Phone Home (Space Week Day 3)
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-06
 *
 * Given an array of distances (in kilometers) between yourself, satellites, 
 * and your home planet, determine how long it will take a message 
 * sent through the route to reach its destination planet.
 *
 * Explanation:
 * - The first value is the distance from your location to the first satellite.
 * - Each subsequent value (except the last) is to the next satellite.
 * - The last value is from the final satellite to your home planet.
 * - The message travels at 300,000 km/s.
 * - Each satellite adds a 0.5 second transmission delay.
 *
 * Return: A number rounded to 4 decimal places (with trailing zeros removed).
 */

function sendMessage(route) {
  const speed = 300000; // km/s

  // 1. Calculate total distance
  const totalDistance = route.reduce((acc, cur) => acc + cur, 0);

  // 2. Calculate travel time based on distance and speed
  const timeTaken = totalDistance / speed;

  // 3. Add 0.5s delay per satellite (one less than route length)
  const totalTime = timeTaken + 0.5 * (route.length - 1);

  // 4. Round to 4 decimal places and remove trailing zeros
  return parseFloat(totalTime.toFixed(4));
}

// Example test cases
console.log(sendMessage([300000, 300000]));                 // 2.5
console.log(sendMessage([384400, 384400]));                 // 3.0627
console.log(sendMessage([54600000, 54600000]));             // 364.5
console.log(sendMessage([1000000, 500000000, 1000000]));    // 1674.3333
console.log(sendMessage([10000, 21339, 50000, 31243, 10000])); // 2.4086
console.log(sendMessage([802101, 725994, 112808, 3625770, 481239])); // 21.1597
