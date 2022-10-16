const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 
 function repeater(str, n) {
  return (str + "+").repeat(n);
}
 
 
 */
function repeater(str, options) {
	str = String(str);
	let {repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
     } = options;
  	addition = String(addition);
  	const stringAddition = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  	const result = (str + stringAddition + separator).repeat(repeatTimes).slice(0, -separator.length);
  return result;
}

module.exports = {
	repeater
};
