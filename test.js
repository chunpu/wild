var assert = require('assert')
var wild = require('./')

var reg = wild('http://google.com/*')
console.log(reg)

assert(reg.test('http://google.com/'))
assert(reg.test('http://google.com/**'))
assert(reg.test('http://google.com/foo'))
assert(reg.test('foo http://google.com/foo bar'))
assert(!reg.test('http://google.com'))

var strictReg = wild('http://google.com/*', true)
assert(strictReg.test('http://google.com/'))
assert(!strictReg.test('foo http://google.com/foo bar'))

console.log('tests pass')
