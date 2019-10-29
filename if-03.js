//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){
	return min(max(a, b), max(c, d));
}

function min(a, b){
	if (a > b){
		return b;
	}
	else{
		return a;
	}
}

function max(a, b){
	if (a > b){
		return a;
	}
	else{
		return b;
	}
}

module.exports = f;