let numbers = '3.0 4.0 5.2';

numbers = numbers.split(/\s/gi); //transforma a string dos dados em um array com elementos correspondentes
numbers = numbers.map((ell) => parseFloat(ell));// converte as strings em float

let [a, b, c] = [...numbers] //desestrutura o array com os valores convertidos e passa para as variáveis

let triangle = (((a * c) /2)).toFixed(3);//calcula a área de um triângulo retângulo

let circle = (3.14159 * Math.pow(c, 2)).toFixed(3);// calcula a área do círculo de raio C

let trapeze = ((a + b) * c / 2).toFixed(3)// calcula a área do trapézio

let square = (b * b).toFixed(3); //calcula área do quadrado

let rectangle = (a * b).toFixed(3);//calcula a área do retângulo

console.log(`TRIANGULO: ${triangle}`);
console.log(`CIRCULO: ${circle}`);
console.log(`TRAPEZIO: ${trapeze}`);
console.log(`QUADRADO: ${square}`)
console.log(`RETANGULO: ${rectangle}`)
