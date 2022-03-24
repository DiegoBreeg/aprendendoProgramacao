const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

//para definir um quantificador usa {}
console.log(texto.match(/\d{1,2}/g));//procura por dígitos que possuem de uma à duas
console.log(texto.match(/[0-9]{2}/g));//procura por caracteres que são dois dígitos, um ao lado do outro
console.log(texto.match(/\d{1,}/g)); //procura por todos os dígitos com um ou mais casa

console.log(texto.match(/\w{7}/g));//procura por palavras que possuem 7 caracteres, com exeção das acentuações
console.log(texto.match(/[\wõ]{7,}/g));

//no futuro
console.log(texto.match(/\b\d{1,2}\b/g));
console.log(texto.match(/\b[\wõ]{7}\b/g));
