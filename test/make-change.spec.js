import test from 'ava';
import makeChange from '../lib/make-change';

const denominationsSmall = [100, 50, 20, 5, 1];
const denominationsLarge = [1000, 500, 250, 200, 100, 20, 5, 10, 1];

test('makeChange should expose a function', t => {
    t.is(typeof makeChange, 'function');
});

test('countChange should produce smallest amount of coins for an amount', t => {
    let changeArr = makeChange(denominationsSmall)(124);
    t.same(changeArr, [100, 20, 1, 1, 1, 1]);
});

test('countChange should produce smallest amount of coins for an amount', t => {
    let changeArr = makeChange(denominationsLarge)(1234);
    t.same(changeArr, [1000, 200, 20, 10, 1, 1, 1, 1]);
});
