var x;
var otvet;
var sum = 1;
x = Math.round(Math.random(0,1) * 1000000);

otvet = prompt('Какое число я загадал');

while (otvet != x) {
	sum = sum + 1;
	if (x > otvet) {
		otvet = prompt('Число больше');
	}
	if (x < otvet) {
		otvet = prompt('Число меньше');
	}
}

alert('Ты угадал! Это число' + x +"Ты затратил " + sum + " попыток");