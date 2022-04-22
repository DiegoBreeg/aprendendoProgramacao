function Constructor(name) {
    this.name = name
}

Constructor.prototype.greeting = function greeting() {return this.name}
//apesar de estar no objeto de protótipo, greeting ainda pode ser enumerada a partir do objeto

let person = new Constructor('diego')
console.log(person.greeting())

for(propName in person)
    console.log(propName)

console.log('greeting' in person)