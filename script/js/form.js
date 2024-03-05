function chekForm(el) {

	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;

var fall = ""
if (name == "" || pass == "" || repass == "" || state == "") 
	fall = "Заполните все поля";
else if (name.lenght <= 1 || name.length > 40)
	fall = "Введите коректное имя";
else if (pass != repass)
	fall = "Пароли не совпадают"
	
document.getElementById('error').innerHTML = fall;
	console.log(fall);

	return false;

}