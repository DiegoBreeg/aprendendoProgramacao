function criaObjeto(a) {    
    let nome = 'pizza'
    let = preco = a
    function falaPreco() {return console.log(`custa:${this.preco}`)}

    return {nome, preco, falaPreco}
}

let pizza = criaObjeto('200');
pizza.preco = 50
pizza.falaPreco()

console.log('falaPreco' in pizza);