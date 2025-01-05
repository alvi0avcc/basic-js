const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// function countCats(matrix) {
//   return matrix.flat().filter(el => el === '^^').length;
// }

function countCats(matrix) {
  if (matrix.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j] === '^^') {
        count ++;
      }
    }
  }
  return count;
}

// function countCats(matrix) {
//   let count = 0;
//   for (let i = 0; i < matrix.length; i += 1) {
//       count += matrix[i].filter(el => el === '^^').length;
//     }
//   return count;
// }

// function countCats(matrix) {
//     return matrix.reduce((count, row) => {
//         return count + row.filter(item => item === '^^').length;
//     }, 0);
// }

// function countCats(matrix) {
//     return matrix.flat().reduce((count, el) => {
//         return el === '^^' ? count + 1 : count;
//     }, 0);
// }

// function countCats(matrix) {
//   let count = 0;
//   for (let i = 0; i < matrix.length; i += 1) {
//       count += matrix[i].reduce((count, el) => { return el === '^^' ? count + 1 : count; }, 0);
//     }
//   return count;
// }

module.exports = {
  countCats
};
