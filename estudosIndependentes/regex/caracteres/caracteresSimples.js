const texto = '1,2,3,4,5,6,a.b c!d?e'; //declarando uma string

const regexVirgula = /,/ //literal vírgula
console.log(texto.split(regexVirgula)); // split divide todos os elementos separados por vírgula e coloca dentro de um array
const separado = texto.split(regexVirgula); //recebendo valor do split

for (let i = 0; i <= separado.length - 1; i++) {
    console.log(separado[i]);
}

console.log(texto.match(regexVirgula));//procura pela primeira vírgula
console.log(texto.match(/,/g));//procura por todas as vírgulas
console.log(texto.match(/A/));//progura pelo caractere A
console.log(texto.match(/A/gi));//procura caractere A e a, maiúscula e minúscula
console.log(texto.match(/2/g));//procura pelo numero 2
console.log(texto.match(/b c!d/));//procura por um texto literal