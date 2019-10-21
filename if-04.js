function f(a, b, c, d){
	var min = null
	var max = null

	if (Math.abs(a) < Math.abs(b))
		min = Math.abs(a)
	else
		min = Math.abs(b)

	if (Math.abs(c) > Math.abs(d))
		max = Math.abs(c)
	else
		max = Math.abs(d)
	
	console.log(max)
	console.log(min)
	if (max > min)
		return max
	else
		return min
}

console.log(f(5, 2, 3,-4))

module.exports = f;