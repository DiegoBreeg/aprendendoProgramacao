const obj = {a:1, b:2, c:3} // criando um objeto literal

const obj2 = Object.create(Object.prototype) //retorna um objeto cujo protótipo é o objeto passado como parâmetro

Object.getOwnPropertyNames(obj) //retorna um array com o nome das propriedades de obj
Object.getPrototypeOf(obj) //retorna o __proto__ do objeto