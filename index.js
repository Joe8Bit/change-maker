'use strict';

const currencyParser = require('./lib/currency-parser');
const countChange = require('./lib/count-change');
const makeChange = require('./lib/make-change');

/**
 * The public interface for making change, takes an array of denominations and
 * a string of a currency amount
 * @param  {String} amount        A string of currency e.g. '1.23' or '$22.34'
 * @param  {Array} denominations An array of currency denominations e.g. [200, 100, 50, 20, 10, 5, 1]
 * @return {Object}               An object counting the change
 */
module.exports = (amount, denominations) => {
  let sortedDenominations = denominations.sort((a, b) => {
      return a - b;
  }).reverse();
  let parsedCurrency = currencyParser(amount);
  let changeArr = makeChange(sortedDenominations)(parsedCurrency);
  return countChange(changeArr, sortedDenominations);
}
