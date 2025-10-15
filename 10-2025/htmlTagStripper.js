/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-15)
 * Problem: HTML Tag Stripper
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-15
 *
 * Given a string of HTML code, remove all tags and return only the plain text content.
 *
 * Explanation:
 * - The input will always be valid HTML.
 * - HTML tags may be nested and can include attributes.
 * - You should remove all tags and attributes, leaving only the text inside.
 * - Example: "<a href='#'>Click here</a>" → "Click here"
 *
 * Return:
 * - The plain text content with all HTML tags removed.
 */

function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

// Example test cases
console.log(stripTags('<a href="#">Click here</a>')); 
// "Click here"

console.log(stripTags('<p class="center">Hello <b>World</b>!</p>')); 
// "Hello World!"

console.log(stripTags('<img src="cat.jpg" alt="Cat">')); 
// ""

console.log(
  stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')
);
// "sectionsection"


