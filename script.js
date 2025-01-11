var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var info = document.getElementById("text");
var titulo = document.getElementById("titulo");

var imgAtual = document.getElementById("foto");
var img1 = "imagens/donaCelia.jpeg";
var img2 = "imagens/donaInes.png";
var img3 = "imagens/julia.jpeg";
var img4 = "imagens/coletaFraldas.jpeg";
var logo = "imagens/logo.png";

const imgs = [logo, img1, img2, img3, img4];

//mudar img
var index = 0;
imgAtual.src = imgs[index];
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
  titulo.textContent = ""
  info.setAttribute('style', 'white-space: pre;');
info.textContent = `    O projeto acamados + amados é uma iniciativa não governamental que apoia 
famílias e cuidadores de pessoas acamadas.

    Com a ajuda de doadores e voluntários o projeto existe há quinze anos e marca
presença na comunidade do Jardim Tupi, onde ocorrem as reuniões e onde 
o projeto nasceu.`

//inicio
botaoInicio.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Início";
  info.textContent = `    O projeto acamados + amados é uma iniciativa não governamental que apoia 
famílias e cuidadores de pessoas acamadas.

    Com a ajuda de doadores e voluntários o projeto existe há quinze anos e marca
presença na comunidade do Jardim Tupi, onde ocorrem as reuniões e onde 
o projeto nasceu.`

});
//informações
botaoInfo.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');

  titulo.textContent = "Informações";
  info.textContent = `    Através de reuniões quinzenais o projeto vem distribuindo fraldas, alimentos
equipamentos médicos e também servindo como um grupo de apoio para os
acamados e seus cuidadores. 

    Idealizado por Dona Inês, o projeto existe há mais de 15 anos e conta com vários
voluntários e parceiros. 
    Com a ajuda fornecida o projeto presta também atendimento odontológico
e faz visitas regulares às casas cadastradas para se certificar que as orientações
estão sendo seguidas e ajudar no que for necessário.`;
});

//contato
botaoContato.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Contato"

  info.textContent = `    As reuniões acontecem quinzenalmente no Centro Comunitário do Jardim Tupi.
   Para uma primeira visita leve documento com foto e um comprovante de residencia.
  
   Local: Centro Comunitário do Jardim Tupi, Cambé - Paraná
   Horário de funcionamento: 08:00 até 12:00 em sábados alternados
   Duvidas? Entre em contato via nosso instagram.
   Instagram: @acamadosmaisamadosofc`
});




