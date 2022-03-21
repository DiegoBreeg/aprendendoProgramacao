const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// ? -> zero ou um (opicional)
const regex = /fogo?/gi; //o operador opicional se aplicará ao o, 0 ou 1 elento iguais a ele
console.log(texto1.match(regex));
console.log(texto2.match(regex));

// o opicional pode ser aplicado à um grupo de caracteres;