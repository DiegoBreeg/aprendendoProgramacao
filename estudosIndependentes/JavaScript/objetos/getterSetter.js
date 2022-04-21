// get e set são propriedades de acesso.
// elas são como propriedades porém possuem métodos exclusivos.
//set é usado para gravar uma informação, seja onde for.
//ao atribuir um valor à essa propriedade o método garante que esse valor será
// passado como parâmetro e não irá sobreescrever a propriedade existente.

//o get permite apenas leitura, e o valor da leitura é o valor do retorno do método.



const obj = {  
    name: 'diego',

    get r() {return console.log(this.name.toUpperCase())},
    set 'r'(name) {this.name = name} //o nome da propriedade pode ser uma string
}
obj.r //objeto configurado para leitura
obj.r = 'raposa' //objeto configurado para gravação
obj.r

console.log('\n') //quebra de linha no console;

const obj2 = {
    name: 'diego',

    get r() {return console.log(this.name)} //objeto configurado apenas para leitura
}
obj2.r
obj2.r = 'raposa'
obj2.r





class Pessoa {
    #private = ''
    constructor(name, age, _private){
        this.name = name
        this.age = age
        this.#private = _private        
    }

    get _private() {return console.log(this.#private)}
    //set _private(_private) {this.#private = _private}
    talk(){return console.log(this.name)}
}
let pessoa = new Pessoa('diego', 26, 'informações privilegiadas');
pessoa._private = 'alterado'
pessoa._private


class Lista {
    #names = new Set()

    get names() { return Array(...this.#names)}
    set add(name) { this.#names.add(name)}
    set delete(name) { this.#names.delete(name)}
}
const lista = new Lista();
lista.add = 'pedra'
lista.add = 'papel'
lista.add = 'tesoura'
console.log(lista.names)
lista.delete = 'pedra'
console.log(lista.names)
