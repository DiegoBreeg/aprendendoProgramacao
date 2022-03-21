const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// * -> zero ou mais
const regex = /fogo*/gi; //zero ou mais pega todoas as ocorrências
console.log(texto1.match(regex));
console.log(texto2.match(regex));

const texto3 = 'diego thiago, rodrigo.ronaldo'
console.log(texto3.match(/\w*[^\s,.]/gi));
