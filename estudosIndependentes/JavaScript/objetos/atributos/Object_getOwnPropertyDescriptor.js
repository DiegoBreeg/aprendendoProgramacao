function Constructor(name) {
    this.name = name
}

// Constructor.prototype.greeting = function greeting() {return this.name}
//apesar de estar no objeto de protótipo, greeting ainda pode ser enumerado a partir do objeto

Object.defineProperty(Constructor.prototype, 'greeting',
    {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function greeting(){return this.name}
    })
//declarado da forma acima greeting não é mais visível e não pode ser alterado ou excluído

let person = new Constructor('diego')
console.log(person.greeting())

Object.defineProperty(person, 'name',
{
    value: person.name, //o valor da propriedade
    writable: false, //se a propriedade pode ser sobrescrita
    enumerable: false, //se a propriedade pode ser enumerada (for/in, Object.keys)
    configurable: false //se a propriedade pode ser deletada
})

person.name = 'raposa'
console.log(person.name)
console.log(Object.getOwnPropertyNames(Constructor.prototype)) //força o objeto a mostrar todas os propriedades
console.log(Object.keys(Constructor.prototype)) //o objeto só mostra propriedades enumeráveis







