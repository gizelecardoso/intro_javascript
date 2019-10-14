1) INTRODUÇÃO - 33 min

    Comandos:
        alert();
        console.log();     F12 no browser - abre o console do desenvolvedor.

        tag script:

            <script></script>   //boa pratica carregar os scripts no final do body.


        COMO ENTENDER MUNDO HTML NO MUNDO JAVASCRIPT:

            DOM - representação do mundo HTML para o JAVASCRIPT.
                *document
                    tota a pagina é representada pelo document. Ele será a PONTE entre HTML e JAVASCRIPT.
            
                Para pesquisar algo no document: Função QUERYSELECTOR;

                    document.querySelector("h1");

                tag com conteudos de texto, podemos ter acesso a esse conteudo, através da propriedade:
                    textContent

                    variavel.textContent

        BOAS PRÁTICAS:
            - Não buscar pela tag - mas pela classe ou id ou seletores CSS.

            - separar código HTML, código CSS e código JAVASCRIPT.
                cria um arquivo .js
                código sem a tag script

                no código HTML:
                        precisamos indicar onde esta o js como fazemos com css.
                    <script src="caminho do arquivo js"><script>
                
                


2) VARIÁVEIS E OPERADORES - 29 min

    - Calculando o IMC
        classe seleciona com o ponto(.)
        id seleciona com o hastag(#)



3) ARRAYS, LOOPS E ESTILOS - 23 min

        toFixed(numero_casas_decimais);
                imc.toFixed(2);


        ESTILOS:

            NO JAVASCRIPT:
                propriedade style.

                paciente.style.backgroundColor = "lightcoral";

            COLOCAR NO CSS:
                background-color: lightcoral;

        manipular as classe do elemento

            classList - retorna todas as classes 
                método add.
                    classList.add(classe_criada_no_css)

4) EVENTOS, FORMULÁRIOS E CRIANDO ELEMENTOS - 32 min

    Eventos - quando percebemos o que o usuário esta fazendo - ações.
        Podemos escutar através dos eventos.

        addEventListener();


    //chamando funcao anonima:

	    titulo.addEventListener("click", function(){
		    console.log("Olha só posso chamar uma função anonima!");

	    });

    //chamando funcoes nomeadas

        titulo.addEventListener("click", mostraMensagem);

	    function mostraMensagem(){
		    console.log("Ola eu fui clicado!");
	    }

    - previne o comportamento padrão:
        event.preventDefault();
        //depois coloco o comportamento que eu quero para o evento.

    
    - com o form, podemos chamar seu input.

        form.altura
        form.peso   etc.


        podemos pegar o valor

            form.altura.value;

    - permitir criar tags html no javascript:
        createElement("nome_tag");
    



5) BOAS PRÁTICAS COM JAVASCRIPT - 36 min.

     - separar arquivos js por funcionalidades.

    - separar blocos de códigos em funções. Para poder reutilizar o código em outros lugares, sem uma repetição sem sentido.

    OBJETOS:

    //Cara de um objeto criado no javascript

        objeto paciente, com as características nome, peso, altura, gordura.
     var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value
        }

    *querySelector - devolve um objeto.
            textContent - característica desse objeto.

    form.reset();  // no caso limpa o formulario



6) VALIDAÇÃO DE FORMULÁRIOS - 40 min.

    *array de erros;
        var erros = [];

        função push - coloca o erro no array;
            - erros.push("mensagem de erro");

        form - indicar uma lista de erros
            <ul id="mensagens-erros">
                <li></li>//lista de erros, que será criada automaticamente.
            </ul>
        
        funcao para manipular HTML
            innerHTML
                - podemos obter o conteudo HTML interno de um elemento;
                - é uma propriedade e não função , ela recebe o novo conteudo através do sinal de = (E NÃO POR PARAMETRO);
                - seu retorno é uma STRING, que representa todo o conteudo HTML interno do próprio elemento;


                var mensagensErros = document.querySelector("#mensagens-erro");
                mensagensErros.innerHTML = "";   // limpa os erros aprensentados anteriormente.

        forEach:

            array[]; // temos um array qualquer

            //para percorrer no for normal:

                for(var i = 0; i < array.length; i++){
                    //faça algo;
                }

            //para percorrer com forEach:

                array.forEach(function(nome){
                    //faça algo;
                });




7) REMOÇÃO, DELEGAÇÃO E ANIMAÇÃO - 29 min

    remoção:
        .remove(); //função.

            conhecemos dois comandos:

                - this - especifica quem esta escutando a ação
                - event.target - quem sofre a ação de ser clicado no caso.

        tinha o problema do dblclick não funcionar com elementos que foram acrescentados depois a tabela

        usamos:
 
            event bubbling

                - delegação, processo possível pelo borbulhamento.

            - queriamos eliminar um elemento da tabela, TR.
            - delegamos como escutador do evento o PAI de TR, no caso usamos a TABELA.

            através do comando:
                .parentNode;

        *COMO o remove é um comando muito instantaneo

            - acrescentamos a animação fadeOut.

                NO CSS:

                    Acrescentamos a classe:
                        .fadeOut    
                            opacidade 0 e a transicao de 0.5 s;
            
            - depois removemos com um atraso, com a ajuda da função:
                    setTimeOut(function(){
                        .remove();
                    }, tempoParaExecutar);  //tempo em milisegundos.



8) FILTRANDO UMA TABELA - 26 min


9) AJAX BUSCANDO PACIENTES COM AJAX - 30 min.



TOTAL = 278 min = 5 horas.