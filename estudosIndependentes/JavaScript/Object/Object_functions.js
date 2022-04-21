const obj = {a:1, b:2, c:3} // criando um objeto literal

const obj2 = Object.create(Object.prototype) //retorna um objeto cujo protótipo é o objeto passado como parâmetro

Object.getPrototypeOf(obj) //retorna o __proto__ do objeto
Object.setPrototypeOf(obj2, obj) //atribui o protótipo do primeiro objeti ao segundo objeto
Object.keys(obj) //retorna um array com os nomes das propriedades próprias e enumeráveis do objeto
Object.getOwnPropertyNames(obj) //retorna um array com o nome das propriedades próprias e não enumeráveis de obj