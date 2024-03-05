var sumClick = 10;


function onClickButton() {
	//alert("Ты нажал на кнопку");
	
	sumClick--;

	console.log(sumClick)
}

function vvod(el) {
	if (el.value == "Давай ограбим банк"){
		alert("тревога!!!");
	}
    console.log(el.value)
}

function kv() {
	for (var i = 0; i < 10; i++) {
		document.write(i*i);
		document.write(" | ");
	}
}