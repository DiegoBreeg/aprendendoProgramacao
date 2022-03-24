const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)); //o retrovisor revisita o grupo armazenao correspondente.

const texto2 ='Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));//?: é um grupo que não captura informação para er usada em retrovisor.

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'));



const texto3 = 'abcdefghijkll';

console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));


