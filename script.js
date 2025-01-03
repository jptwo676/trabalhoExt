var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var conteudoInicio = document.getElementById("infoInicio");
var conteudoContato = document.getElementById("infoContato")
var conteudoInfo = document.getElementById("infoInfo");
var titulo = document.getElementById("titulo");

conteudoInicio.textContent = "O projeto acamados + amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas."

botaoInicio.addEventListener("click", function(){
    console.log("inicio on")
    titulo.textContent = "Início"
    conteudoInicio.textContent = "";
    conteudoContato.textContent = "";
    conteudoInicio.textContent = ""
    
});

botaoInfo.addEventListener("click", function(){
    conteudoInfo.textContent = `O projeto acamados + amados é uma iniciativa 
  não governamental que apoia familias e cuidadores de pessoas acamadas.`;
    console.log("info on")

});

botaoContato.addEventListener("click", function(){
    console.log("contato on")
    conteudoInicio.textContent = "";
    conteudoContato.textContent = "";
    titulo.textContent = "Entre em contato!"
    conteudoContato.textContent = "Instagram: @acamadosmaisamadosofc Telefone: (43) 99922-3245"
});

