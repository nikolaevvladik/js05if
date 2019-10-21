function f(a, b, c, d){
	var min = null
	var max = null

	if (Math.abs(a) < Math.abs(b))
		min = a
	else
		min = b

	if (Math.abs(c) > Math.abs(d))
		max = c
	else
		max = d

	if (max > min)
		return max

	return min
}

module.exports = f;