import test from 'ava';
import currencyParser from '../lib/currency-parser';

test('currencyParser should expose a function', t => {
    t.is(typeof currencyParser, 'function');
});

test('currencyParser should parse dot delimited currencys', t => {
    t.is(currencyParser('1.24'), 1.24);
});

test('currencyParser should parse comma delimited currencys', t => {
    t.is(currencyParser('1,24'), 1.24);
});

test('currencyParser should parse large dot delimited currencys', t => {
    t.is(currencyParser('12345678.24'), 12345678.24);
});

test('currencyParser should parse large comma delimited currencys', t => {
    t.is(currencyParser('12,345,678.24'), 12345678.24);
});

test('currencyParser should parse dot delimited currencys with other cruft', t => {
    t.is(currencyParser('$1.24'), 1.24);
    t.is(currencyParser('GBP£ 1.24'), 1.24);
});

test('currencyParser should pass through numbers', t => {
    t.is(currencyParser(1.24), 1.24);
});
