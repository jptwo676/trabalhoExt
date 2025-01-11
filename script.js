var botaoInicio = document.getElementById("inicio");
var botaoInfo = document.getElementById("infoMenu");
var botaoContato = document.getElementById("contato");
var info = document.getElementById("text");
var titulo = document.getElementById("titulo");

// manuseio de imgs
var imgAtual = document.getElementById("foto");
var img1 = "imagens/stock1.png";
var img2 = "imagens/stock2.jpg";
var img3 = "imagens/stock3.jpg";
var logo = "imagens/logo.png";

const imgs = [logo, img1, img2, img3];

//mudar img de acordo com botao
//diminuindo ou aumentando o index
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

//inicio texto
botaoInicio.addEventListener("click", function()
  {
  //atribui formatação no css pra manter tudo estruturado
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Início";
  info.textContent = `    O projeto acamados + amados é uma iniciativa não governamental que apoia 
famílias e cuidadores de pessoas acamadas.

    Com a ajuda de doadores e voluntários o projeto existe há quinze anos e marca
presença na comunidade do Jardim Tupi, onde ocorrem as reuniões e onde 
o projeto nasceu.`

});
//informações texto
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

//contato texto
botaoContato.addEventListener("click", function()
  {
  info.setAttribute('style', 'white-space: pre;');
  titulo.textContent = "Contato"

  info.textContent = `   As reuniões acontecem quinzenalmente no Centro Comunitário do Jardim Tupi.
   Para uma primeira visita leve documento com foto e um comprovante de residencia.
  
   Local: Centro Comunitário do Jardim Tupi
   R. Tupinambás, 2 - Jardim Tupi, Cambé - PR, 86183-190 

   Horário de funcionamento: 08:00 até 12:00 em sábados alternados
   Duvidas? Entre em contato via nosso instagram.
   Instagram: @acamadosmaisamadosofc`
});




