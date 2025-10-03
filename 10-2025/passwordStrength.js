/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-03)
 * Problem: Password Strength
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-03
 *
 * Given a password string, return "weak", "medium", or "strong" based on its strength.
 *
 * Password is evaluated by 4 rules:
 * 1. At least 8 characters long.
 * 2. Contains both uppercase and lowercase letters.
 * 3. Contains at least one number.
 * 4. Contains at least one special character from: !, @, #, $, %, ^, &, *
 *
 * Strength determination:
 * - "weak": meets fewer than 2 rules
 * - "medium": meets 2 or 3 rules
 * - "strong": meets all 4 rules
 */

function checkStrength(password) {
  let counter = 0;

  // Rule 1: Length at least 8
  if (password.length >= 8) {
    counter += 1;
  }

  // Rule 2: Uppercase and lowercase letters
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
    counter += 1;
  }

  // Rule 3: At least one number
  if (/\d/.test(password)) {
    counter += 1;
  }

  // Rule 4: At least one special character
  if (/[!@#$%^&*]/.test(password)) {
    counter += 1;
  }

  // Determine strength based on rules met
  if (counter < 2) return "weak";
  if (counter === 2 || counter === 3) return "medium";
  return "strong";
}

// Example test cases
console.log(checkStrength("123456"));           // "weak"
console.log(checkStrength("pass!!!"));          // "weak"
console.log(checkStrength("Qwerty"));           // "weak"
console.log(checkStrength("PASSWORD"));         // "weak"
console.log(checkStrength("PASSWORD!"));        // "medium"
console.log(checkStrength("PassWord%^!"));      // "medium"
console.log(checkStrength("qwerty12345"));      // "medium"
console.log(checkStrength("S3cur3P@ssw0rd"));   // "strong"
console.log(checkStrength("C0d3&Fun!"));        // "strong"


