module.exports = wild

var specialBytes = '\\.+?()|[]{}^$'

function wild(str, isStrict) {
	str = QuoteMeta(str)
	str = str.replace('*', '.*')
	if (isStrict) {
		str = '^' + str + '$'
	}
	return new RegExp(str)
}

// copy from https://github.com/golang/go/blob/master/src/regexp/regexp.go QuoteMeta
function QuoteMeta(str) {
	var ret = []
	for (var i = 0; i < str.length; i++) {
		var val = str.charAt(i)
		if (-1 != specialBytes.indexOf(val)) {
			val = '\\' + val
		}
		ret.push(val)
	}
	return ret.join('')
}
