
function f(N){
	switch(N){
		case 1:
			return ('Понедельник');
			break;
		case 2:
			return ('Вторник');
			break;
		case 3:
			return ('Среда');
			break;
		case 4:
			return ('Четверг');
			break;
		case 5:
			return ('Пятница');
			break;
		case 6:
			return ('Суббота');
			break;
		case 7:
			return ('Воскресенье');
			break;
		default:
			return ("");
			break;
	}
}

module.exports = f;