wild
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/wild.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wild
[downloads-image]: http://img.shields.io/npm/dm/wild.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/wild
[david-image]: http://img.shields.io/david/chunpu/wild.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/wild


Generate regexp by wildcard string

Installation
---

```sh
npm i wild
```

Api
---

`wild(str)` => return regexp


Usage
---

wild only cares about the wildcard `*`, and escape other special chars in regexp

```js
var wild = require('wild')

var reg = wild('http://google.com/*')
// => /http:\/\/google\.com\/.*/

reg.test('http://google.com/foo')
// => true
```

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/wild.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/wild
[license-image]: http://img.shields.io/npm/l/wild.svg?style=flat-square
[license-url]: #
