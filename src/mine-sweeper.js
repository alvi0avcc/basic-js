const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++){
      if (row > 0 && col > 0 && matrix[row - 1][col - 1]) mines[row][col]++;
      if (col > 0 && matrix[row][col - 1]) mines[row][col]++;
      if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1]) mines[row][col]++;
      if (row < matrix.length - 1 && matrix[row + 1][col]) mines[row][col]++;
      if (row < matrix.length - 1 && col < matrix.length - 1 && matrix[row + 1][col + 1]) mines[row][col]++;
      if (col < matrix[row].length - 1 && matrix[row][col + 1]) mines[row][col]++;
      if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1]) mines[row][col]++;
      if (row > 0 && matrix[row - 1][col]) mines[row][col]++;
    }
  }
  return mines;
}

module.exports = {
  minesweeper
};
