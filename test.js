var assert = require('assert')
var wild = require('./')

var reg = wild('http://google.com/*')
console.log(reg)

assert(reg.test('http://google.com/'))
assert(reg.test('http://google.com/**'))
assert(reg.test('http://google.com/foo'))
assert(!reg.test('http://google.com'))

console.log('tests pass')
