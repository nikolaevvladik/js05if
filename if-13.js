function S(x1, y1, x2, y2, x3, y3){
	var a = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
	var b = Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2))
	var c = Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1))
	var d = 0

	if (a == b) {
		d = Math.sqrt(a*a+b*b)

		if (d = c*Math.sqrt(2)) {
			return true
		}
	}

	else if (a == c) {
		d = Math.sqrt(a*a+c*c)

		if (d = b*Math.sqrt(2)) {
			return true
		}
	}

	else if (b == c) {
		d = Math.sqrt(b*b+c*c)

		if (d = a*Math.sqrt(2)) {
			return true
		}	
	}

	return false
}

// console.log(S(1, 0, 0, 3, 1, 0))

module.exports = S;