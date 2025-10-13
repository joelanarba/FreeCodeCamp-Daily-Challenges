/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-13)
 * Problem: Battle of Words
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-13
 *
 * Given two sentences representing two teams, determine which team wins.
 *
 * Explanation:
 * - Each word from both teams "battles" its corresponding opponent's word.
 * - The value of each word is the sum of its letters:
 *    - 'a'–'z' = 1–26
 *    - 'A'–'Z' = 2–52 (uppercase letters count double)
 * - A word wins if its value is greater than the opponent’s.
 * - The team with more word wins is the overall winner.
 *
 * Return:
 * - "We win" if our team wins more battles.
 * - "We lose" if the opponent wins more.
 * - "Draw" if both win the same number of words.
 */

function battle(ourTeam, opponent) {
  const ourWords = ourTeam.split(" ");
  const oppWords = opponent.split(" ");

  let ourWins = 0;
  let oppWins = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourValue = calculateWordValue(ourWords[i]);
    const oppValue = calculateWordValue(oppWords[i]);

    if (ourValue > oppValue) {
      ourWins++;
    } else if (ourValue < oppValue) {
      oppWins++;
    }
  }

  if (ourWins > oppWins) return "We win";
  if (ourWins < oppWins) return "We lose";
  return "Draw";
}

function calculateWordValue(word) {
  let value = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char >= "a" && char <= "z") {
      value += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (char >= "A" && char <= "Z") {
      value += (char.charCodeAt(0) - "A".charCodeAt(0) + 1) * 2;
    }
  }
  return value;
}

// Example test cases
console.log(battle("hello world", "hello word"));                 // We win
console.log(battle("Hello world", "hello world"));                // We win
console.log(battle("lorem ipsum", "kitty ipsum"));                // We lose
console.log(battle("hello world", "world hello"));                // Draw
console.log(battle("git checkout", "git switch"));                // We win
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries")); // We lose
console.log(battle("We must never surrender", "Our team must win"));        // Draw
