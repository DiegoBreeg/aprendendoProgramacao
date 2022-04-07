let paidOut = document.querySelector('#paidOut');
let button = document.querySelector('#button');
let pizzaBtn = document.querySelector('#pizza');
let lancheBtn = document.querySelector('#lanche');
let salgadinhoBtn = document.querySelector('#salgadinho');

button.addEventListener('click', () => {carrinho.valorPago = paidOut.value; console.log(carrinho.valorPago)});
pizzaBtn.addEventListener('click', () => carrinho.produtos.push(pizza))
lancheBtn.addEventListener('click', () => carrinho.produtos.push(lanche))
salgadinhoBtn.addEventListener('click', () => carrinho.produtos.push(salgadinho))

function criaCarrinho() {
    let cliente = '';
    let produtos = [];
    let valorPago = 0;

    let calculaPreco = function() {
        let precoTotal = this.produtos.reduce((acc, {preco}) => {return acc += preco},0)
        console.log(precoTotal);
    }
    let calculaTroco = function() {
        let troco = this.valorPago - this.produtos.reduce((acc, {preco}) => {return acc += preco},0);
        console.log(troco);
    }

    return {cliente, produtos, valorPago, calculaPreco, calculaTroco}
}

function criaProduto(nome, preco, peso) {
    this.nome = nome;
    this.preco = preco;
    this.peso = peso;

    return {nome, preco, peso}
}

let pizza = criaProduto('pizza', 12, '500g');
let lanche = criaProduto('lanche', 10, '300g');
let salgadinho = criaProduto('salgadinho', 5, '100g');
const carrinho = criaCarrinho();