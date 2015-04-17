module.exports = wild

var specialBytes = '\\.+?()|[]{}^$'

function wild(str) {
	str = QuoteMeta(str)
	str = str.replace('*', '.*')
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
