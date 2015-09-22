Api
---

`wild(str[, isStrict])` => return regexp

if isStrict is true, wild will return regexp like `/^ ... $/`

Usage
---

wild only cares about the wildcard `*`, and escape other special chars in regexp

```js
var wild = require('wild')

var reg = wild('http://google.com/*', true)
// => /^http:\/\/google\.com\/.*$/

reg.test('http://google.com/foo')
// => true
```

Advanced
---

get source by `wild.source`

```js
wild.source('http://google.com/*')
// => 'http://google\\.com/.*'

// different with raw source

wild('http://google.com/*').source
// => 'http:\/\/google\.com\/.*'
```
