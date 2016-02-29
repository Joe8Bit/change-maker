'use strict';

const accounting = require('accounting');

/**
 * Parses an amount of a currency into a float
 * e.g. "GBP £ 12,345,678.90" -> 12345678.9
 * It also detects and accounts for comma vs dot currency notation
 * @param  {String} amount An amount of currency in strong form
 * @return {Number}        A number representing the amount of currency
 */
const normaliseCurrency = (amount) => {
  let decimal;
  if (typeof amount === 'string' && amount.indexOf(',') !== -1) decimal = ',';
  if (typeof amount === 'string' && amount.indexOf('.') !== -1) decimal = '.';
  return accounting.unformat(amount, decimal);
}

/**
 * This function breaks decimal amounts of currency into their lowest base e.g.
 * $1.24 becomes 124 representing it's 'cents' equivalent
 * @param  {[type]} amount [description]
 * @return {[type]}        [description]
 */
const normaliseToBaseTenCurrency = (amount) => {
  return normaliseCurrency(amount) * 100;
}

module.exports = normaliseToBaseTenCurrency;
