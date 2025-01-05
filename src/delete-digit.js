const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
//     const arr = [...`${n}`];
//     return Math.max(...arr.map((_, i) => Number(arr.toSpliced(i, 1).join(''))));
// }

// try another metod for speed
function deleteDigit(n) {
    const str = `${n}`;
    let maxNumber = 0;

    for (let i = 0; i < str.length; i++) {
        const newNumber = Number(str.slice(0, i) + str.slice(i + 1));
        maxNumber = Math.max(maxNumber, newNumber);
    }

    return maxNumber;
}

module.exports = {
  deleteDigit
};
