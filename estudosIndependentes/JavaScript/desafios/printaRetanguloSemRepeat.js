let altura = 3;
let largura = 9;

function desenhaBorda(largura){
    let figura = [];
    for(let i = 0; i <= largura; i++){
        figura.push('#');
    }
    figura = figura.join('');
    console.log(figura);
}

function desenhaOco(){
    let oco = [];
    for(let i = 0; i <= largura; i++){
        i == 0 || i == largura ? oco.push('#') : oco.push(' ');  
    }
    oco = oco.join('');
    console.log(oco);
}

for( let i = 0; i <= altura; i++)   
    i == 0 || i == altura ? desenhaBorda(largura) : desenhaOco(largura);