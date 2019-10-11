var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";

        //paciente.style.color = "red";
        //paciente.style.background-color = "red" // da erro
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.style.backgroundColor = "lightcoral";

    }

    if(pesoEhValido && alturaEhValida ){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
		event.preventDefault();
		var form = document.querySelector("#form-adiciona");
		
		var nome = form.nome.value;
		var peso = form.peso.value;
		var altura = form.altura.value;
		var gordura = form.gordura.value;

		var pacienteTr = document.createElement("tr");//passa o nome da tag que queremos criar
		
		var nomeTd = document.createElement("td");
		nomeTd.textContent = nome;
		var pesoTd = document.createElement("td");
		pesoTd.textContent = peso;
		var alturaTd = document.createElement("td");
		alturaTd.textContent = altura;
		var gorduraTd = document.createElement("td");
		gorduraTd.textContent = gordura;
		var imcTd = document.createElement("td");
		imcTd.textContent = imc;

		pacienteTr.appendChild(nomeTd);
		pacienteTr.appendChild(pesoTd);
		pacienteTr.appendChild(alturaTd);
		pacienteTr.appendChild(gorduraTd);

		var tabela = document.querySelector("#tabela-pacientes");

		tabela.appendChild(pacienteTr);

	})