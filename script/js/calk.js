function chekForm(el) {

	var x = Number(el.x.value);
	var y = Number(el.y.value);
	var state = el.state.value;
    var rezult;
    if (state == "Сумма") {
    	rezult = x + y;

    }
    if (state == "Разность") {
    	rezult = x - y;

    }


if (state == "Произведение") {
    	rezult = x * y;

    }
    

    if (state == "Деление") {
        rezult = x / y;
    }

document.getElementById('error').innerHTML =rezult;
	

	return false;

}