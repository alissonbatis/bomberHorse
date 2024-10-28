const botaoPerfil = document.getElementById("botaoPerfil");
const blocoPerfil = document.getElementById("blocoPerfil");
const overlay = document.getElementById("overlay");
const botaoMudarNick = document.getElementById("botaoMudarNick");
let nickUser = document.getElementById("nickUser");
let blocoDoNick = document.getElementById("blocoDoNick");
const botoesDeMudancaDeNick = document.getElementById("botoesDeMudancaDeNick");
const botaoSaveNick = document.getElementById('botaoSaveNick');
const botaoRestaurarNick = document.getElementById('botaoRestaurarNick');

//clique no botao de perfil
botaoPerfil.addEventListener("click", () => {
  blocoPerfil.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//clique no overlay
overlay.addEventListener("click", () => {
  blocoPerfil.classList.add("hidden");
  overlay.classList.add("hidden");
});

//MUDANÇA DE NICK
function ativarMudancaDeNick() {
  const antigoNick = nickUser.textContent;

  blocoDoNick.innerHTML = `<input type="text" id="inputDoNick" value = "${antigoNick}">`;
  botoesDeMudancaDeNick.classList.remove('hidden');
  botaoMudarNick.classList.add('hidden');

  const inputDoNick = document.getElementById("inputDoNick");

  function salvarNick(){
    const novoNick = inputDoNick.value;

    blocoDoNick.innerHTML = `
        
        <div>
            <h1 id="nickUser">${novoNick}</h1>
        </div> `



    botaoMudarNick.classList.remove('hidden');
    botoesDeMudancaDeNick.classList.add('hidden');
  }
  botaoSaveNick.addEventListener('click', salvarNick);
};
botaoMudarNick.addEventListener("click", ativarMudancaDeNick);




