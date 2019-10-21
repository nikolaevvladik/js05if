function f(k, b, R) {
	D = 4*k*k*b*b - 4*(1+k*k)*(b*b-R*R)

	if (D < 0) {
		return 0
	}
	else if (D > 0) {
		return 2
	}
	else if (D === 0) {
		return 1
	}
}

module.exports = f;