const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = {};
  const result = [];
  names.forEach(name => {
    if (nameCount[name] === undefined) {
      result.push(name);
      nameCount[name] = 1;
    } else {
      let newName;
      let count = nameCount[name];
      do {
        newName = `${name}(${count})`;
        count++;
      } while (nameCount[newName] !== undefined);
      result.push(newName);
      nameCount[newName] = 1;
      nameCount[name] = count;
    }
  });

  return result;
}

module.exports = {
  renameFiles
};
