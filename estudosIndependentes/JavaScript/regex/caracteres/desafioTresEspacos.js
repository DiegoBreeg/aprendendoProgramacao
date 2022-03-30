const texto = 'a   b';

console.log(texto.match(/a\s\s\sb/g));

 //no futuro...
 console.log(texto.match(/a\s+b/)); //aceita qualquer quantidade de espaços entre a e b
 console.log(texto.match(/a {3}b/));//aceita 3 espaços entre a e b
console.log(texto.match(/a\s{3}b/));//aceita 3 espaços entre a e b
