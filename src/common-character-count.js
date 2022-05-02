
const toPairs = (object) => Object.keys(object).map((key) => [key, object[key]]);

const reducer = (totalPerLetter, letter) => {
	
	// if "letter" is defined in "total per letter", then increment "total" by 1
	if(totalPerLetter.hasOwnProperty(letter)) {
		totalPerLetter[letter]++;
	}
	
	// otherwise, then define "total" as 1 per "letter" entry
	else {
		totalPerLetter[letter] = 1;
	}
	
	// Export "total per letter"
	return totalPerLetter;
};

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
const getCommonCharacterCount = (s1, s2) => {
	
	// Define "group per letter"
	const leftGroupPerLetter = s1.split('').reduce(reducer, {});
	const rightGroupPerLetter = s2.split('').reduce(reducer, {});

	// Define "intersection" object
	const intersection = {};
	toPairs(leftGroupPerLetter).forEach(([letter, total]) => {
		if(rightGroupPerLetter.hasOwnProperty(letter)) {
			intersection[letter] = Math.min(total, rightGroupPerLetter[letter]);
		}
	});
	toPairs(rightGroupPerLetter).forEach(([letter, total]) => {
		if(leftGroupPerLetter.hasOwnProperty(letter)) {
			intersection[letter] = Math.min(total, leftGroupPerLetter[letter]);
		}
	});
	
	// Define "total"
	return Object.values(intersection).reduce((output, total) => output + total, 0);
};

module.exports = {
	getCommonCharacterCount
};
