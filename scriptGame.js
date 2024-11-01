const cavalos = document.querySelectorAll(".cavaloImagem");
const casas = document.querySelectorAll(".casa , .casaPreta");
const textoVEZ = document.querySelector(".vez");
const somDoCavalo = document.querySelector('#som')
const somDePlay = document.querySelector('#somDePlay')
const displayDoGanhador = document.querySelector('.displayDoGanhador');

let brancas = true;
let corDoCavalo = "";
let cavaloAtivo = null;
let casasComBomb = [];

let PlayOn = false;

let posicaoCavalo = {
  x: null,
  y: null,
};



const botaoplaylocal = document.querySelector('#botaoJogar');
botaoplaylocal.addEventListener('click', gamePlay);

function gamePlay(){
  somDePlay.play();
  const divDaVez = document.querySelector('.divDaVez');
  PlayOn = true;
  divDaVez.style.display = 'block';

  casas.forEach((casa) => {
    casa.addEventListener("click", function () {
      const x = parseInt(casa.getAttribute("data-x"));
      const y = parseInt(casa.getAttribute("data-y"));
  
      if (casa.classList.contains("comCavalo") && cavaloAtivo == null) {
        posicaoCavalo.x = x;
        posicaoCavalo.y = y;
  
        //console.log(`o cavalo esta ${posicaoCavalo.x} ${posicaoCavalo.y}`);
        if (casa.classList.contains("cavaloPreto") && brancas == false) {
          corDoCavalo = "Preto";
          cavaloAtivo = casa;
          mostrarCasasDisp(verificarPosicoes());
        } else if (casa.classList.contains("cavaloBranco") && brancas == true) {
          corDoCavalo = "Branco";
          cavaloAtivo = casa;
          mostrarCasasDisp(verificarPosicoes());
        } else {
        }
      } else if (casa.classList.contains("bomb")) {
        //console.log('morreu')
      } else {
        //console.log(x,y)
      }
    });
  });
}

function verificarPosicoes(){
  const posicoes = [
    { x: posicaoCavalo.x - 1, y: posicaoCavalo.y + 2 },
    { x: posicaoCavalo.x + 1, y: posicaoCavalo.y + 2 },
    { x: posicaoCavalo.x - 1, y: posicaoCavalo.y - 2 },
    { x: posicaoCavalo.x + 1, y: posicaoCavalo.y - 2 },
    { x: posicaoCavalo.x + 2, y: posicaoCavalo.y - 1 },
    { x: posicaoCavalo.x + 2, y: posicaoCavalo.y + 1 },
    { x: posicaoCavalo.x - 2, y: posicaoCavalo.y - 1 },
    { x: posicaoCavalo.x - 2, y: posicaoCavalo.y + 1 },
  ];

  const posicoesValidas = posicoes.filter(
    (posicao) =>
      posicao.x >= 1 &&
      posicao.x <= 8 &&
      posicao.y >= 1 &&
      posicao.y <= 8 &&
      !casasComBomb.some(
        (casacbomb) => posicao.x === casacbomb.x && posicao.y === casacbomb.y
      )
  );
  console.log(`posicoes Validas  ${JSON.stringify(posicoesValidas)} `);

  
  return posicoesValidas;
};




function mostrarCasasDisp(posicoesValidas) {
  
  //limpa as casas validas
  casas.forEach((casa) => {
    casa.classList.remove("casaValida");
    casa.removeEventListener("click", mudarCavaloDeLugar);
  });

  posicoesValidas.forEach((valida) => {
    casas.forEach((casa) => {
      if (
        casa.getAttribute("data-x") == valida.x &&
        casa.getAttribute("data-y") == valida.y &&
        !casa.classList.contains("bomb") &&
        !casa.classList.contains("comCavalo")
      ) {
        casa.classList.add("casaValida");
        casa.addEventListener("click", mudarCavaloDeLugar);
      }
    });
  });
}



function verificarSeVenceu(posicoesValidas){
  if (posicoesValidas.length === 0) {
    displayDoGanhador.classList.remove("hidden");

    displayDoGanhador.innerHTML = `<h1>${corDoCavalo == "Branco" ? "As Pretas Vencem" : "As Brancas Vencem"} </h1>`;

    return;
  }
}






function mudarCavaloDeLugar() {
  let casasAnteriores = {
    x: 0,
    y: 0,
  };

  casasAnteriores.x = posicaoCavalo.x;
  casasAnteriores.y = posicaoCavalo.y;

  const xDaCasaValida = parseInt(this.getAttribute("data-x")); //pega o atributo X da casa valida que foi clicada
  const yDaCasaValida = parseInt(this.getAttribute("data-y")); //pega o atributo Y da casa valida que foi clicada

  casas.forEach((casa) => {
    //remove as casas validas e eventos, e add a bomba
    casa.classList.remove("casaValida");
    casa.removeEventListener("click", mudarCavaloDeLugar);

    if (
      casa.getAttribute("data-x") == casasAnteriores.x &&
      casa.getAttribute("data-y") == casasAnteriores.y
    ) {
      casa.innerHTML = `<img src="img/bomba.png" alt="bomba" >`;
      casa.classList.add("bomb");
      let casaBomba = {
        x: parseInt(casa.getAttribute("data-x")),
        y: parseInt(casa.getAttribute("data-y")),
      };
      casasComBomb.push(casaBomba);
      casa.classList.remove("comCavalo", "cavaloPreto", "cavaloBranco");
      casa.removeEventListener("click", mostrarCasasDisp);
    }
  });

  posicaoCavalo.x = xDaCasaValida;
  posicaoCavalo.y = yDaCasaValida;

  // Pra a casa valida clicada ele faz isso ==
  this.innerHTML = `<img src="img/cavalo ${corDoCavalo}.png" alt=""  class="cavaloImagem" id="cavalo${corDoCavalo}" >`;
  somDoCavalo.play();
  this.classList.add("comCavalo");
  this.classList.add(`cavalo${corDoCavalo}`);


  //console.log(`'a posicao antiga do cavalo e' ${JSON.stringify(casasAnteriores)} `);

  //console.log(`'a nova posicao do cavalo e' ${JSON.stringify(posicaoCavalo)} `);

  mudarVez();
  cavaloAtivo = null;
  console.log(casasComBomb);

  const proxPosicoes = verificarPosicoes();
  verificarSeVenceu(proxPosicoes);
  
}


function mudarVez() {
  brancas = !brancas;
  textoVEZ.innerHTML = `<h1>${brancas ? "Brancas" : "Pretas"}</h1>`;
}

function corEscolhidaPreto(){
  console.log('botao preto clicado')
  if(casas[casas.length -1].classList.contains('cavaloBranco')){
  casas[casas.length -1].classList.remove('cavaloBranco');
  casas[casas.length -1].classList.add('cavaloPreto');
  casas[casas.length -1].innerHTML = `<img src="img/cavalo Preto.png" alt=""  class="cavaloImagem" id="cavaloPreto">`;


  casas[0].classList.remove('cavaloPreto');
  casas[0].classList.add('cavaloBranco');
  casas[0].innerHTML = `<img src="img/cavalo Branco.png" alt=""  class="cavaloImagem" id="cavaloBranco">`;

  }

}
function corEscolhidaBranco(){
  if (casas[casas.length -1].classList.contains('cavaloPreto')){
    casas[casas.length -1].classList.remove('cavaloPreto');
    casas[casas.length -1].classList.add('cavaloBranco');
    casas[casas.length -1].innerHTML = `<img src="img/cavalo Branco.png" alt=""  class="cavaloImagem" id="cavaloBranco">`;

    casas[0].classList.remove('cavaloBranco');
    casas[0].classList.add('cavaloPreto');
    casas[0].innerHTML = `<img src="img/cavalo Preto.png" alt=""  class="cavaloImagem" id="cavaloPreto">`;
  }

}