// . ?  * + - ^ $ | [ ] { } () \ :
const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexPonto = /\./g; //o \ faz com que o metacaractere seja interpretado como caractere literal.
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g; // , ou . ou ? ou ! ou ' ' globalmente
console.log(texto.split(regexSimbolos));