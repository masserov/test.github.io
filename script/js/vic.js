var ball = 0;

function vopros(name, yes) {
	otvet = prompt(name);
 
if (otvet == yes) {
	ball = ball + 1;
	document.getElementById('test').innerHTML = 'Ответ верный';
} else {
	document.getElementById('test').innerHTML = 'Ответ неверный';
       } 
}
alert('ВЫ ПОПАЛИ НА СТРАНИЦУ ТЕСТА ПО ИНФОРМАТИКЕ');

vopros('Какая минимальная единицa информации?','бит');
vopros('Склько бит в одном байте?', '8');
document.getElementById('test').innerHTML = 'вы набрали' + ball + ' бал';