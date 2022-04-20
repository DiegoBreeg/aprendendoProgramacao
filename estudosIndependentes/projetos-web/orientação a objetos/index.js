let input_jogador = document.querySelector('#input_jogador')
const button = document.querySelector('#button')


function controla_input() {    
    n = input_jogador.value;
    if(typeof n == 'string')
        n = +n;
    console.log(n);
    control = 'm';
    console.log('Digite a quantidade máxima que se pode retirar!');
}

function controla_input2() {
    m = input_jogador.value;
    if(typeof m == 'string')
    m = +m;
    console.log(m)      
    console.log('Começando partida!');
    console.log('...');
        
    if(n % (m + 1) == 0) {
        console.log('Computador começa!');            
        console.log('Digite a quantidade de peças que deseja retirar!')
        control = 'computador começa'
        vez = 'computador'
     }
    else{
        console.log('Jogador começa!');
        console.log('Digite a quantidade de peças que deseja retirar!')    
        control = 'jogador começa'
        vez = 'jogador'      
        }
}

const jogador = {
    jogada: () => {        
        if(input_jogador.value > m || input_jogador.value <= 0) {
            console.log('Valor não permitido, digite novamente:');
            vez = 'computador'
        }
        else{
            n = n - input_jogador.value;
            console.log(`Jogador retirou ${input_jogador.value} peças`)
            console.log(`Sobraram: ${n} peças`)
            vez = 'computador' 
        }
    }
}

const computador = {
    jogada: () => {
        if(n % (m + 1) == 0) {
            n = +n - +m
            console.log(`O Computador tirou ${m} peças`);
            console.log(`Sobraram ${n} peças`)
            console.log('Digite a quantidade de peças que deseja retirar!')  
            vez = 'jogador'
            return;
        }            
        else {
            n = n - (n % (m + 1));
            console.log(`O Computador tirou ${(n % (m + 1))} peças`);
            console.log(`Sobraram ${n} peças`)
            console.log('Digite a quantidade de peças que deseja retirar!')  
            vez = 'jogador';
            return;
        }            
    }
}



let n = 0;
let m = 0;
let vez = '';

console.log('Digite a quantidade de peças no jogo!')
let control = 'n';
button.addEventListener('click',() => {    
    switch(control){
        case 'n':
           controla_input();
            break;
        case 'm': 
            controla_input2();
            break;
        case 'computador começa':

            if(n > 0 && vez == 'computador') {
                computador.jogada();
                break; 
            }
            if(n > 0 && vez == 'jogador'){
                jogador.jogada();
                computador.jogada()
                break;            
            }

            else {
                console.log(`Que pena, o Computador ganohu`);
                break;
            } 

        case 'jogador começa':

            if(n > 0 && vez == 'jogador'){
                jogador.jogada();                
                computador.jogada();
                break;            
            }
            if(n > 0 && vez == 'computador') {
                computador.jogada();
                break; 
            }            

            else {
                console.log(`Que pena, o Computador ganhou`);
                break;
            }
    }
    
});

