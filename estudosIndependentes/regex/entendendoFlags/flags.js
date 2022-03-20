// o objetivo do exercício é mostrar o uso das flags
// g - global
// i - ignore case, ignora a diferença entre caracteres maiúsculos e minúsculus.

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));
