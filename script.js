var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var conteudoInicio = document.getElementById("infoInicio");
var conteudoContato = document.getElementById("infoContato")
var conteudoInfo = document.getElementById("infoInfo");
var titulo = document.getElementById("titulo");

conteudoInicio.textContent = `O projeto acamados + amados é uma iniciativa não
  governamental que apoia familias e cuidadores de pessoas acamadas.`;

botaoInicio.addEventListener("click", function(){
  console.log("inicio on");
  titulo.textContent = "Início"
  conteudoInicio.textContent = "bla bla";
  conteudoInfo.textContent = "";
  conteudoContato.textContent = "";
  
});

botaoInfo.addEventListener("click", function(){

  conteudoInfo.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Informações";
  conteudoInicio.textContent = "";
  conteudoContato.textContent = "";
  conteudoInfo.textContent = "O projeto Acamados + Amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas. \r\n";
  conteudoInfo.textContent += "Através de reuniões quinzenais o projeto vem distribuindo fraldas, alimentos equipamentos méidicos e também servindo como um grupo de apoio para os acamados e seus cuidadores. \r\n";
  conteudoInfo.textContent += "Idealizado por Dona Inês, o projeto existe a mais de 15 anos e conta com  varios voluntarios e parceiros. \r\n";
  conteudoInfo.textContent += "Com a ajuda fornecida o projeto presta tambem atendimento odontologico e faz visitas regulares as casas cadastradas para";
  conteudoInfo.textContent += "se certificar que as orientações estão sendo seguidas e ajudar no que for necessario. \r\n";

  console.log("info on");

});

botaoContato.addEventListener("click", function(){

  conteudoContato.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Entre em contato"
  console.log("contato on")
  conteudoInicio.textContent = "";
  conteudoInfo.textContent = "";
  conteudoContato.textContent = "As reuniões acontecem quinzenalmente no Centro Comunitario do Jardim Tupi. \r\n";
  conteudoContato.textContent += "Você pode entrar em contato para sanar suas duvidas em nosso instagram ou pelo telefone. \r\n";
  conteudoContato.textContent += "Se for sua primeira vez leve documentos com fotos do acamados para realizar um cadastro e poder retirar as fraldas. \r\n";

  conteudoContato.textContent += "Instagram: @stock \r\n";
  conteudoContato.textContent += "Telefone: (43) 94002-8922 \r\n";

});

