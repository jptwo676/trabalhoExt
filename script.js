var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var info = document.getElementById("text");
var titulo = document.getElementById("titulo");

var imgAtual = document.getElementById("foto");
var img1 = "stock1.png";
var img2 = "stock2.jpg";
var img3 = "stock3.jpg";

const imgs = [img1, img2, img3];

//mudar img
var index = 0;
function imgChange(direcao) 
{
  if(direcao == "ante") 
  {
    if(index > 0) 
    {
      index--;
    }
    imgAtual.src = imgs[index];
  } 
  else if(direcao == "prox") 
  {
    if(index < imgs.length - 1)
    {
      index++;
    } 
    imgAtual.src = imgs[index];
  }
}


//seta o conteudo de inicio
  titulo.textContent = "Início"
  info.setAttribute('style', 'white-space: pre;');
info.textContent = `O projeto acamados + amados é uma iniciativa não governamental que apoia 
famílias e cuidadores de pessoas acamadas.

Com a ajuda de doadores e voluntários o projeto existe há quinze anos e marca
presença na comunidade do Jardim Tupi,
onde ocorrem as reuniões e onde o projeto nasceu.`

//inicio
botaoInicio.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Início";
  info.textContent = `O projeto acamados + amados é uma iniciativa não governamental que apoia familias e cuidadores de pessoas acamadas.
  Com a ajuda de doadores e voluntarios o projeto existe ha quinze anos e marca presença
  na comunidade do Jardim Tupi, onde ocorrem as reuniões e onde o projeto nasceu.`

});
//informações
botaoInfo.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Informações";
  info.textContent = "Através de reuniões quinzenais o projeto vem distribuindo fraldas, alimentos equipamentos médicos e também servindo como um grupo de apoio para os acamados e seus cuidadores. \r\n";
  info.textContent += "Idealizado por Dona Inês, o projeto existe a mais de 15 anos e conta com  varios voluntarios e parceiros. \r\n";
  info.textContent += "Com a ajuda fornecida o projeto presta tambem atendimento odontologico e faz visitas regulares as casas cadastradas para";
  info.textContent += "se certificar que as orientações estão sendo seguidas e ajudar no que for necessario. \r\n";

});

//contato
botaoContato.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Contato"

  info.textContent = "As reuniões acontecem quinzenalmente no Centro Comunitario do Jardim Tupi. \r\n";
  info.textContent += "Você pode entrar em contato para sanar suas duvidas em nosso instagram ou pelo telefone. \r\n";
  info.textContent += "Se for sua primeira vez leve documentos com fotos do acamados para realizar um cadastro e poder retirar as fraldas. \r\n";
  info.textContent += "Instagram: @stock \r\n";
  info.textContent += "Telefone: (43) 94002-8922 \r\n";
});




