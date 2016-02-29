'use strict';

/**
 * A greedy algorithm, implemented as memoised pure function to count change
 * @param  {Array} coins An array of integers representing all of a currencies
 * denominations
 * @return {Array}
 * @example
 * 		makechange([200, 100, 50, 20, 10, 5, 1])('1.24');
 */
const makeChange = (coins) => {
  let cache = {};
  let change;

  return change = (amount) => {
    if (!amount) return [];
    if (cache[amount]) return cache[amount].slice(0);
    let min = [];
    let newMin, newAmount;

    coins.forEach((coin) => {

      if (
        (newAmount = amount - coin) >= 0 &&
        ((newMin = change(newAmount)).length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
      }

    });

    return (cache[amount] = min).slice(0);
  };
};

module.exports = makeChange;
