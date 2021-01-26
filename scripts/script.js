setInterval( function () {

	// seleciona os valores dos inputs, e armazena na variável
	let r_value = document.querySelector('#r-input').value;
	let g_value = document.querySelector('#g-input').value;
	let b_value = document.querySelector('#b-input').value;

	document.querySelector("#circle").style.backgroundColor = `rgb(${r_value}, ${g_value}, ${b_value})`; //muda a cor do circulo de acordo com o valor dos inputs
	document.querySelector("#color-result").innerHTML = `rgb(${r_value}, ${g_value}, ${b_value})`; //muda o texto de acordo com o valor dos inputs
}, 60)

window.onload = function () {
	
	let date = new Date();
	let hour = 19;

	if (hour > 6 && hour < 19) {
		document.body.style.backgroundColor = '#fff'; //muda a cor do body para branca
		document.body.style.color = '#000';
		document.querySelector("main section").style.backgroundColor = '#f2f2f2';
	}
}