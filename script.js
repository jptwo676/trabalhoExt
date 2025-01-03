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
  conteudoInicio.textContent = "bla bla";
  conteudoInfo.textContent = "";
  conteudoContato.textContent = "";
  
});

botaoInfo.addEventListener("click", function(){
  conteudoInicio.textContent = "";
  conteudoContato.textContent = "";
  conteudoInfo.textContent = `O projeto Acamados + Amados é uma iniciativa 
  não governamental que apoia familias e cuidadores de pessoas acamadas.
    Através de reuniões quinzenais o projeto vem distribuindo fraldas, alimentos
  equipamentos méidicos e também servindo como um grupo de apoio para os 
  acamados e seus cuidadores.

    Idealizado por Dona Inês, o projeto existe a mais de 15 anos e conta com 
  varios voluntarios e parceiros. Com a ajuda prestada o projeto presta tambem
  atendimento odontologico e faz visitas regulares as casas cadastradas para
  se certificar que as orientações estão sendo seguidas e ajudar no que for 
  necessario.`;
  console.log("info on")

});

botaoContato.addEventListener("click", function(){
  console.log("contato on")
  conteudoInicio.textContent = "";
  conteudoInfo.textContent = "";
  titulo.textContent = "Entre em contato!"
  conteudoContato.textContent = "Instagram: @acamadosmaisamadosofc Telefone: (43) 99922-3245"
});

