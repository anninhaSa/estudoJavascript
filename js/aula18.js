function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;

	var altura = (metros * 100 + centimetros) / 100;
	var imc = kilos / (altura * altura);

	formulario.imc.value=imc.toFixed(2);

	const LIM_INF_PESO_IDEAL=20;
	const LIM_SUP_PESO_IDEAL=25;
	const LIM_SUP_SOBREPESO=30;
	const LIM_SUP_OBESIDADE_MODERADA=35;
	const LIM_SUP_OBESIDADE_SEVERA=40;
	const LIM_SUP_OBESIDADE_MORBIDA=50;

	if(imc <= LIM_INF_PESO_IDEAL) {
		configuraClassificacao("Abaixo do Peso");
	} else if(imc>LIM_INF_PESO_IDEAL && imc<=LIM_SUP_PESO_IDEAL) {
		configuraClassificacao("Peso Ideal");
	} else if(imc>LIM_SUP_PESO_IDEAL && imc<=LIM_SUP_SOBREPESO) {
		configuraClassificacao("Sobrepeso");
	} else if(imc>LIM_SUP_SOBREPESO && imc<=LIM_SUP_OBESIDADE_MODERADA) {
		configuraClassificacao("Obesidade Moderada");
	} else if(imc>LIM_SUP_OBESIDADE_MODERADA && imc<=LIM_SUP_OBESIDADE_SEVERA) {
		configuraClassificacao("Obesidade Severa");
	} else if(imc>LIM_SUP_OBESIDADE_SEVERA && imc<=LIM_SUP_OBESIDADE_MORBIDA) {
		configuraClassificacao("Obesidade Mórbida");
	} else {
		configuraClassificacao("Super Obesidade");
	}
}

function configuraClassificacao(msg) {
	document.getElementById("classificacao").innerHTML=msg;
}