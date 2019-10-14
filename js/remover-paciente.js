var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvent = event.target;
    var paiAlvo = alvoEvent.parentNode;
    var eliminaSuave = paiAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiAlvo.remove();
    }, 500); //tempo em ms.
})

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        this.remove();
//    })
//})