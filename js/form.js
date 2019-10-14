var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
		event.preventDefault();
		var form = document.querySelector("#form-adiciona");
        
        //extraindo informações do paciente do form
        var paciente = obtemPacienteDoFormulario(form);

       
        var erros = validaPaciente(paciente);
        
        console.log(erros);
        if(erros.length > 0){
            
            exibeMensagensDeErro(erros);
            return;
        }
        
        adicionaPacienteNaTabela(paciente);
       
        form.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
        

    })
    
    function obtemPacienteDoFormulario(form){
        
        //criando objeto no javascript
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }

        return paciente;
        
    }

    function montaTr(paciente){

		var pacienteTr = document.createElement("tr");//passa o nome da tag que queremos criar
        pacienteTr.classList.add("paciente");//passando a classe paciente para o tr criado.

		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        
        return pacienteTr
    }
    
    function montaTd (dado, classe){
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;

        return td;
    }

    function validaPaciente(paciente){

        var erros = [];

        if(!validaPeso(paciente.peso)){
            erros.push("O peso é inválido");
        }

        if(!validaAltura(paciente.altura)){
            erros.push("A altura é inválida");
        }

        if(paciente.nome.length == 0){
            erros.push("O nome não pode ser em branco");
        }

        if(paciente.gordura.length == 0){
            erros.push("Gordura não pode ser em branco");
        }

        if(paciente.peso.length == 0){
            erros.push("Peso não pode ser em branco");
        }

        if(paciente.altura.length == 0){
            erros.push("Altura não pode ser em branco");
        }

        return erros;
    }


    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);

        });
    }

    function adicionaPacienteNaTabela(paciente){
        //cria a tr e a td do paciente.
        var pacienteTr = montaTr(paciente);

     //adicionando o paciente na tabela.
		var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(pacienteTr);
        
    }