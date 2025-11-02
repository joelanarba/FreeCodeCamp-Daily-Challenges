/**
 * FreeCodeCamp Daily Coding Challenge (2025-11-01)
 * Problem: Signature Validation
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-01
 *
 * Given a message string, a secret key string, and a signature number,
 * determine if the signature is valid using this encoding method:
 *
 * Letters values:
 *  a - z: 1 - 26
 *  A - Z: 27 - 52
 *  all other characters: 0
 *
 * Signature = sum(message) + sum(key)
 * Return true if the computed signature matches the provided signature.
 *
 * Example:
 *  message: "foo" → 36
 *  key: "bar" → 21
 *  signature: 57 → true
 */

function verify(message, key, signature) {
  function sumValues(str) {
    let sum = 0;
    for (let char of str) {
      const code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        sum += code - 96;
      } else if (code >= 65 && code <= 90) {
        sum += code - 38;
      }
    }
    return sum;
  }

  const totalSum = sumValues(message) + sumValues(key);
  return totalSum === signature;
}

console.log(verify("foo","bar",57)); // true
console.log(verify("foo","bar",54)); // false
console.log(verify("freeCodeCamp","Rocks",238)); // true
console.log(verify("Is this valid?","No",210)); // false
console.log(verify("Is this valid?","Yes",233)); // true
console.log(verify("Check out the freeCodeCamp podcast,","in the mobile app",514)); // true
