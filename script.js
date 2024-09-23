let corDoCavalo = "";
const cavalos = document.querySelectorAll('.cavaloImagem');
const casas = document.querySelectorAll('.casa , .casaPreta');

const casasComBomb = document.querySelector('.bomb');
const textoVEZ = document.querySelector('.vez');

let brancas = false;


let posicaoCavalo = {
    x: null,
    y: null,
};





cavaloPreto = document.getElementById('cavaloPreto');
cavaloBranco = document.getElementById('cavaloBranco');
cavalosARRAY = [cavaloPreto , cavaloBranco];




function verificacao(){ casas.forEach(casa => {
    casa.addEventListener('click', function(){
        const x = parseInt(casa.getAttribute('data-x'));
        const y = parseInt(casa.getAttribute('data-y'));


        if(casa.classList.contains('comCavalo')){
            posicaoCavalo.x = x;
            posicaoCavalo.y = y;
        
            //console.log(`o cavalo esta ${posicaoCavalo.x} ${posicaoCavalo.y}`);
            if (casa.classList.contains('cavaloPreto')){
                corDoCavalo = "Preto";
            }
            else if(casa.classList.contains('cavaloBranco')){
                corDoCavalo = "Branco";
            }


            mostrarCasasDisp();
            
        
        }else if(casa.classList.contains('bomb')){
            //console.log('morreu')



        }else{
            //console.log(x,y)
        };

        
        
        
        
    })
    
});}

verificacao();




function mostrarCasasDisp(){
    const posicoes = [
            { x: posicaoCavalo.x - 1, y: posicaoCavalo.y + 2 },
            { x: posicaoCavalo.x + 1, y: posicaoCavalo.y + 2 },
            { x: posicaoCavalo.x - 1, y: posicaoCavalo.y - 2 },
            { x: posicaoCavalo.x + 1, y: posicaoCavalo.y - 2 },
            { x: posicaoCavalo.x + 2, y: posicaoCavalo.y - 1 },
            { x: posicaoCavalo.x + 2, y: posicaoCavalo.y + 1 },
            { x: posicaoCavalo.x - 2, y: posicaoCavalo.y - 1 },
            { x: posicaoCavalo.x - 2, y: posicaoCavalo.y + 1 },
        
    ]

    const posicoesValidas = posicoes.filter(posicao => 
        posicao.x >= 1 && posicao.x <= 8 && posicao.y >= 1 && posicao.y <= 8
    );
    //console.log(`posicoes Validas    ${JSON.stringify(posicoesValidas)} `)





    casas.forEach(casa => {
        casa.classList.remove('casaValida');
        casa.removeEventListener('click',  mudarCavaloDeLugar)
                    
    });

        
    


    
    posicoesValidas.forEach(valida => {
        casas.forEach(casa => {
             if (casa.getAttribute('data-x') == valida.x && casa.getAttribute('data-y') == valida.y && !casa.classList.contains('bomb') && !casa.classList.contains('comCavalo')) {


                casa.classList.add('casaValida');
                casa.addEventListener('click', mudarCavaloDeLugar);
            }
        });
    });
}



function mudarCavaloDeLugar(){
    
    let casasAnteriores = {
        x: 0,
        y: 0
    }
    if (this.classList.contains('bomb')){
        alert('bomba')
        return;


    }

    function mudarVez() {
        if (brancas){
            textoVEZ.innerHTML = `<h1> Brancas </h1>`;
        }
        else {
            textoVEZ.innerHTML = `<h1> Pretas </h1>`;
        }
        brancas = !brancas;
    }

    

    
    

   
    



    casasAnteriores.x = posicaoCavalo.x
    casasAnteriores.y = posicaoCavalo.y

    const xDaCasaValida = parseInt(this.getAttribute('data-x')); //pega o atributo X da casa valida que foi clicada
    const yDaCasaValida = parseInt(this.getAttribute('data-y')); //pega o atributo Y da casa valida que foi clicada

    casas.forEach(casa => {
        casa.classList.remove('casaValida');
        casa.removeEventListener('click',  mudarCavaloDeLugar)

        if (casa.getAttribute('data-x') == casasAnteriores.x && casa.getAttribute('data-y') == casasAnteriores.y){
            casa.innerHTML = `<img src="img/bomba.png" alt="bomba" >`
            casa.classList.add('bomb');
            casa.classList.remove('comCavalo')
            casa.removeEventListener('click',mostrarCasasDisp)
            

        }
                    
    });
    
    posicaoCavalo.x = xDaCasaValida ;
    posicaoCavalo.y = yDaCasaValida; 

    this.innerHTML = `<img src="img/cavalo ${corDoCavalo}.png" alt=""  class="cavaloImagem" id="cavaloBranco" >`;

    



    console.log(`'a posicao antiga do cavalo e' ${JSON.stringify(casasAnteriores)} `);

    console.log(`'a nova posicao do cavalo e' ${JSON.stringify(posicaoCavalo)} `);
    

    this.classList.add('comCavalo');
    this.classList.add(`cavalo${corDoCavalo}`)
    
    mudarVez();
    
    
};