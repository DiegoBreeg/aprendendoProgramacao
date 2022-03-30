const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi));// pega o caractere que está no começo da string
console.log(texto.match(/r$/gi));// o $ representa o último caractere

console.log(texto.match(/^r.*r$/gi)); // problema do dotall

