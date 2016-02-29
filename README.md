## change-maker

[![Circle CI](https://circleci.com/gh/Joe8Bit/change-maker.svg?style=svg)](https://circleci.com/gh/Joe8Bit/change-maker)

Change Maker is a simple general purpose implementation of the '[change making](https://en.wikipedia.org/wiki/Change-making_problem)' problem, this module has been created to talk candidates through a greedy (but memoised and sideffectless) implementation of this classic [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem).

## Usage

```
npm install change-maker
```

```javascript
const makeChange = require('change-maker');

// Where the first argument is a string representing the amount and the second is the array of coin denominations
const change = makeChange('$2.34', [100, 50, 25, 10, 5, 1]); // { '100': 2, '50': 0, '25': 1, '10': 0, '5': 1, '1': 4 }
```

## Testing

`npm test`

## Contrubuting

All contributors will abide by the `CODE_OF_CONDUCT.md`.

## License

MIT
