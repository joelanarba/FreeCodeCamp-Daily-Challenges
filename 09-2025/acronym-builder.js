/**
 * FreeCodeCamp Daily Coding Challenge (2025-09-07)
 * Problem: Acronym Builder
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-08
 *
 * Given a string containing one or more words, return an acronym.
 * Rules:
 * - Use the first letter of each word capitalized
 * - Ignore: "a", "for", "an", "and", "by", "of" (unless it’s the first word)
 * - No spaces in the result
 */

function buildAcronym(str) {
  const ignoreWords = ["a", "for", "an", "and", "by", "of"];
  const arr = str.split(" ");
  const acronym = [];

  arr.forEach((word, index) => {
    if (index !== 0 && ignoreWords.includes(word.toLowerCase())) {
      return; // skip this word
    }
    acronym.push(word[0].toUpperCase());
  });

  return acronym.join("");
}

function buildAcronym1(str){
    return str.split(/\s+/)
            .filter((word, index) => index === 0 || !['for', 'a', 'an', 'and', 'by', 'of'].includes(word.toLowerCase()))
            .map(word => word[0].toUpperCase())
            .join("");
}

// Example test cases
console.log(buildAcronym("Search Engine Optimization")); // "SEO"
console.log(buildAcronym("Frequently Asked Questions")); // "FAQ"
console.log(buildAcronym("Federal Bureau of Investigation")); // "FBI"
console.log(buildAcronym("For your information")); // "FYI"
console.log(buildAcronym("By the way")); // "BTW"
console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"));
// "AUHWPOTIMSH"
