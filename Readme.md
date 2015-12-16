
# evaluates

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if syntax is supported.

## Installation

    $ npm install @f/evaluates

## Usage

```js
var evaluates = require('@f/evaluates')

evaluates('function noop () {}') // => true
```

## API

### evaluates(code)

- `code` - code to check

**Returns:** boolean

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/evaluates.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/evaluates
[git-image]: https://img.shields.io/github/tag/micro-js/evaluates.svg
[git-url]: https://github.com/micro-js/evaluates
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/evaluates.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/evaluates
