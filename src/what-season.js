
/**
 * Get "type" of "value"
 * @param {*} value required "value"
 * @returns {String} "type"
 */
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = (date) => {

	if(date === undefined) {
		return 'Unable to determine the time of year!';
	}

	const type = getType(date);

	if('Date' !== type) {
		throw new Error('Invalid date!');
	}

	const month = date.getMonth();

	if(2 <= month && month <= 4) {
		return 'spring';
	}

	if(5 <= month && month <= 7) {
		return 'summer';
	}

	if(8 <= month && month <= 10) {
		return 'autumn';
	}

	return 'winter';
};

module.exports = {
	getSeason
};
