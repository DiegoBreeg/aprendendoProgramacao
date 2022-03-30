const randomNumbers = [36, 99, 37,63];

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);
console.log(numbersGreaterThan37);
//filter() pode receber 3 arumentos
//item do array que ele vai verificar
//índex do item
//o próprio array
// apenas o item é obrigatório
//o filter também recebe uma função, esta função retorna um boolean.
//se o boolean for true, o item verificado passa para o array gerado.
//se o boolean for false, o item é ignorado e o filter passa para o próximo.


