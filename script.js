var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var info = document.getElementById("contentText");
var titulo = document.getElementById("titulo");

var imgAtual = document.getElementById("foto");
var img1 = "stock1.png";
var img2 = "stock2.jpg";
var img3 = "stock3.jpg";

const imgs = [img1, img2, img3];

//mudar img
//TODO debugar essa merda 
var index = 0;
function imgChange(direcao) {
  console.log("Running func, index = " + index);
  if(direcao = "ante") {
    console.log("Running ante, index = " + index);
    if(index > 0) {
      index--;
    }
    imgAtual.src = imgs[index];
  } else if(direcao = "prox") {
    console.log("Running prox, index = " + index);
      if(index < 3) {
        index++;
      } 
    imgAtual.src = imgs[index];
  }
}


//seta o conteudo de inicio
info.textContent = `O projeto acamados + amados é uma iniciativa não
  governamental que apoia familias e cuidadores de pessoas acamadas.`;

botaoInicio.addEventListener("click", function(){
  console.log("inicio on");
  titulo.textContent = "Início"
  info.textContent = `O projeto acamados + amados é uma iniciativa não
    governamental que apoia familias e cuidadores de pessoas acamadas.`;
  
});

botaoInfo.addEventListener("click", function(){

  info.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Informações";
  info.textContent = "O projeto Acamados + Amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas. \r\n";
  info.textContent += "Através de reuniões quinzenais o projeto vem distribuindo fraldas, alimentos equipamentos méidicos e também servindo como um grupo de apoio para os acamados e seus cuidadores. \r\n";
  info.textContent += "Idealizado por Dona Inês, o projeto existe a mais de 15 anos e conta com  varios voluntarios e parceiros. \r\n";
  info.textContent += "Com a ajuda fornecida o projeto presta tambem atendimento odontologico e faz visitas regulares as casas cadastradas para";
  info.textContent += "se certificar que as orientações estão sendo seguidas e ajudar no que for necessario. \r\n";

  console.log("info on");

});

botaoContato.addEventListener("click", function(){

  info.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Entre em contato"
  console.log("contato on")

  info.textContent = "As reuniões acontecem quinzenalmente no Centro Comunitario do Jardim Tupi. \r\n";
  info.textContent += "Você pode entrar em contato para sanar suas duvidas em nosso instagram ou pelo telefone. \r\n";
  info.textContent += "Se for sua primeira vez leve documentos com fotos do acamados para realizar um cadastro e poder retirar as fraldas. \r\n";
  info.textContent += "Instagram: @stock \r\n";
  info.textContent += "Telefone: (43) 94002-8922 \r\n";
});




