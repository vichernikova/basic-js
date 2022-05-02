
/**
 * Is "value" a cat?
 * 
 * @param {*} value required "value"
 * @returns {Boolean} "true" or "false"
 * 
 */
const isCat = (value) => '^^' === value;

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
const countCats = (backyard) => backyard.flat(Infinity).filter(isCat).length;

module.exports = {
  countCats
};
