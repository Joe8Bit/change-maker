import test from 'ava';
import countChange from '../lib/count-change';

const change = [100, 100, 50, 20, 5, 1, 1, 1, 20, 50, 100, 20, 5];

test('countChange should expose a function', t => {
    t.is(typeof countChange, 'function');
});

test('countChange should produce the correct object schema and results', t => {
    let changeObj = countChange(change);
    t.is(Object.keys(changeObj).length, 5);
    t.same(Object.keys(changeObj), ['1', '5', '20', '50', '100']);
    t.is(changeObj['100'], 3);
    t.is(changeObj['50'], 2);
    t.is(changeObj['20'], 3);
    t.is(changeObj['5'], 2);
    t.is(changeObj['1'], 3);
});
