function literalObjectFactory(count){
    let armazena = [];
    for(let i = 1; i <= count; i++) {
        armazena.push({propriedade: `${i} objeto criado!`})
    }
    return armazena
}

let armazena = literalObjectFactory(3)

console.log(armazena);