function f(x, y, z){
    if (x+y+z <= x*y*z && x+y+z <= x*y+z)
        return x+y+z;
    else if (x*y*z <= x+y+z && x*y*z <= x*y+z)
        return x*y*z; 
    else if (x*y+z <= x+y+z && x*y+z <= x*y*z)
    	return x*y+z;
}

module.exports = f;