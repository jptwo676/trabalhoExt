var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var conteudoInicio = document.getElementById("infoInicio");
var conteudoContato = document.getElementById("infoContato")
var titulo = document.getElementById("titulo");

conteudoInicio.textContent = "O projeto acamados + amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas."

botaoInicio.addEventListener("click", function(){
    titulo.textContent = "Início"
    conteudoInicio.textContent = "";
    conteudoContato.textContent = "";
    conteudoInicio.textContent = "O projeto acamados + amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas."
    
});

botaoInfo.addEventListener("click", function(){
    conteudoInicio.textContent = "";
    console.log("botao info ativado")

});

botaoContato.addEventListener("click", function(){
    conteudoInicio.textContent = "";
    conteudoContato.textContent = "";
    titulo.textContent = "Entre em contato!"
    conteudoContato.textContent = "Instagram: @acamadosmaisamadosofc Telefone: (43) 99922-3245"
});

