const texto1 = 'O josé Simão é muito engraçado... hehehehehe';

console.log(texto1.match(/(he)+/g)); //o grupo aqui possibilida o uso do quantificador na dupla de caracteres 'he'.

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag';


console.log(texto2.match(/(http:\/\/)?(w{3})?[\w\.]+/g));


