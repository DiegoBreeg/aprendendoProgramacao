function Person(name) {    
    this.name = name;
    Person.pessoas++
}

function PersonWhoFlies(name) {
    this.asas = 'Conheço o método de voar'
    PersonWhoFlies.pessoasVoaoras++
    Person.call(this, name);
}

Person.prototype.falaNome = function falaNome (){return `Meu nome é ${this.name}`}
Person.pessoas = 0;
PersonWhoFlies.prototype = Object.create(Person.prototype);
PersonWhoFlies.prototype.voa = function voa() {return `Posso voar`};
PersonWhoFlies.pessoasVoaoras = 0;

const aldrick = new PersonWhoFlies('aldrick')
const diego = new Person('diego')
const tortuga = new Person('tortuga')

console.log(diego.falaNome());
console.log(aldrick.falaNome());

console.log(Person.pessoas)
console.log(PersonWhoFlies.pessoasVoaoras)