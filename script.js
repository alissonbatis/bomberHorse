
/*const cavalos = document.querySelectorAll('.cavaloImagem')*/
const casas = document.querySelectorAll('.casa , .casaPreta');

let posicaoCavalo = {
    x: null,
    y: null,
};






cavaloPreto = document.getElementById('cavaloPreto');
cavaloBranco = document.getElementById('cavaloBranco');
cavalosARRAY = [cavaloPreto , cavaloBranco];




casas.forEach(casa => {
    casa.addEventListener('click', function(){
        const x = parseInt(casa.getAttribute('data-x'));
        const y = parseInt(casa.getAttribute('data-y'));


        if(casa.classList.contains('comCavalo')){
            posicaoCavalo.x = x;
            posicaoCavalo.y = y;
        
            console.log(`o cavalo esta ${posicaoCavalo.x} ${posicaoCavalo.y}`);

            mostrarCasasDisp();
            
        
        }else if(casa.classList.contains('bomb')){
            bomba()



        }else{
            alert("clique na casa do cav")
            console.log(x,y)
        };

        
        
        
        
    })
    
});




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
    console.log(`posicoes Validas    ${JSON.stringify(posicoesValidas)} `)





    casas.forEach(casa => {
        casa.classList.remove('casaValida');
        casa.removeEventListener('click',  mudarCavaloDeLugar)
                    
    });

        
    


    
    posicoesValidas.forEach(valida => {
        casas.forEach(casa => {
            if (casa.getAttribute('data-x') == valida.x && casa.getAttribute('data-y') == valida.y) {

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

        }
                    
    });
   
    posicaoCavalo.x = xDaCasaValida ;
    posicaoCavalo.y = yDaCasaValida; 

    this.innerHTML = `<img src="img/cavalo preto.png" alt=""  class="cavaloImagem" id="cavaloBranco" >`;

    console.log(`'a posicao antiga do cavalo e' ${JSON.stringify(casasAnteriores)} `);

    console.log(`'a nova posicao do cavalo e' ${JSON.stringify(posicaoCavalo)} `);
    

    this.classList.add('comCavalo');
    
    
};
    
function bomba(){
    
    
    
}















