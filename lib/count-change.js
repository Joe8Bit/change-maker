'use strict';

/**
 * Produces an object with change denominations as key and their corresponding
 * amounts counts as values
 * @param  {Array} change     An array produced by the makeChange function
 * @return {Object}            An object of change and their amounts
 */
const countChange = (change) => {
    return change.reduce((counter, item) => {
        counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
        return counter;
    }, {});
}

module.exports = countChange;
