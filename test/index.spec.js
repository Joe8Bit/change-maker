import test from 'ava';
import changeMaker from '../index';

const denominations = [100, 20, 5, 10, 1];

test('changeMaker should expose a function', t => {
    t.is(typeof changeMaker, 'function');
});

test('changeMaker should return an object of the correct change', t => {
    let change = changeMaker('$22.34', denominations);
    t.is(change[100], 22);
    t.is(change[20], 1);
    t.is(change[10], 1);
    t.is(change[5], 0);
    t.is(change[1], 4);
});
