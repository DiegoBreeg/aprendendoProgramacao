const texto = '1,2,3,4,5,6,a.b c!d?e[f';

//para definit uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g; //é achado qualquer um dos elementos do conjunto
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]./g; //capta a com ou sem acento.
console.log(texto2.match(regexComESemAcento));