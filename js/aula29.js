window.onload = function() {
	carregarPoltronas();
}

var poltronas=[false, true, false, true, true, true, false, true, false]

function carregarPoltronas(){
	var imagem=document.getElementsByTagName("img");

	for(var i=0;i<imagem.length;i++) {
		if(poltronas[i]) {
			imagem[i].src="img/aula29/poltronaDisponivel.jpg";
		} else {
			imagem[i].src="img/aula29/poltronaIndisponivel.jpg";
		}
	}
}

function selecionarPoltrona(){
	var imagens = document.getElementsByTagName("img");

	for (var i = 0; i < poltronas.length-1; i++) {
		if(poltronas[i]){
			imagens[i].src="img/aula29/poltronaReservada.jpg"

			var quer = confirm("Você quer esta poltrona?")

			if(quer){
				break;
			} else {
				imagens[i].src="img/aula29/poltronaDisponivel.jpg";
			}
		}
	}
}

function selecionarCasal(){
	var imagens = document.getElementsByTagName("img");

	for (var i = 0; i < poltronas.length-1; i++) {
		if(poltronas[i] && poltronas[i+1]){
			imagens[i].src="img/aula29/poltronaReservada.jpg"
			imagens[i+1].src="img/aula29/poltronaReservada.jpg"

			var quer = confirm("Você quer estas poltronas?")

			if(quer){
				break;
			} else {
				imagens[i].src="img/aula29/poltronaDisponivel.jpg";
				imagens[i+1].src="img/aula29/poltronaDisponivel.jpg";
			}
		}
	}
}