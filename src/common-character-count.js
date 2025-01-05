const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(s1, s2) {
//   const arr1 = [...s1];
//   const arr2 = [...s2];
//   return arr1.filter((el) => {
//     const i = arr2.indexOf(el);
//     if (i === -1) return false;
//     else {
//       arr2.splice(i, 1);
//       return true;
//     }
//   }).length;
// }

// try another metod for speed
function getCommonCharacterCount(s1, s2) {
  const charCount = {};
  let commonCount = 0;
  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of s2) {
    if (charCount[char]) {
      commonCount++;
      charCount[char]--;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
