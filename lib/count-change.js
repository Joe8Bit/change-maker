'use strict';

const _ = require('lodash');

/**
 * Sum the denominations that are described and needed to make the total amount
 * @param  {Array} change     An array produced by the makeChange function
 * @return {Object}            An object of change and their amounts
 */
const countIncluded = (change) => {
  return change.reduce((counter, item) => {
      counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
      return counter;
  }, {});
}

/**
 * Produces an object with change denominations as key and their corresponding
 * amounts counts as values, then pad the object with any denominations that
 * were not required
 * @param  {Array} change     An array produced by the makeChange function
 * @param  {Array} denominations     The original denominations array
 * @return {Object}            An object of change and their amounts
 */
const countChange = (change, denominations) => {
    let counted = countIncluded(change);
    let unused = _.zipObject(denominations, _.map(denominations, function() { return 0; }));

    return  _.assignIn(unused, counted);
}

module.exports = countChange;
