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
