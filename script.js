var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var conteudoPrincipal = document.getElementById("texto");
var titulo = document.getElementById("titulo");

botaoInicio.addEventListener("click", function(){
    console.log("botao inicio ativado")
    
});

botaoInfo.addEventListener("click", function(){
    console.log("botao info ativado")

});

botaoContato.addEventListener("click", function(){
    console.log("botao contato ativado")
    titulo.textContent = "Entre em contato!"
    conteudoPrincipal.textContent = "
Instagram: @acamadosmaisamadosofc
Telefone: (43) 99922-3245";

});

console.log(conteudoPrincipal);
