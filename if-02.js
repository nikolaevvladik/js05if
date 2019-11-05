//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a, b, c, d){

	var nom1, nom2;

	if(a > b)
		nom1 = b;
	else
		nom1 = a;
	

	if(c > d)
		nom2 = d;
	else
		nom2 = c;
	

	if (nom1 > nom2)
		return(nom1);
	else
		return(nom2);
	


}

module.exports = f;