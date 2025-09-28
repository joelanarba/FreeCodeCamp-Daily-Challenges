/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-28)
 * Problem: CSV Header Parser
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-28
 *
 * Given the first line of a comma-separated values (CSV) file,
 * return an array containing the headings.
 *
 * Rules:
 * - The first line of a CSV file contains headings separated by commas
 * - Remove any leading or trailing whitespace from each heading
 */

function getHeadings(csv) {
  return csv.split(',').map(x => x.trim());
}

// Example test cases
console.log(getHeadings("name,age,city")); 
// ["name", "age", "city"]

console.log(getHeadings("first name,last name,phone")); 
// ["first name", "last name", "phone"]

console.log(getHeadings("username , email , signup date ")); 
// ["username", "email", "signup date"]
