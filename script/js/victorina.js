function chekForm(el) {

	
	var v1 = el.v1.value;
    var v2 = el.v2.value;
    var rez1, rez2;
    var itog = 0;

if (v1 == "Пекин") {
    rez1 = "Верно!";
    itog = itog + 1;
}  else rez1 = "Неверно";



if (v2 == "8") {
    rez2 = "Верно!";
    itog = itog + 1;
}  else {rez2 = "Неверно"};

document.getElementById('rez1').innerHTML = rez1;
document.getElementById('rez2').innerHTML = rez2;

document.getElementById('itog').innerHTML = "вы набрали " + itog + " очков";

	return false;

}