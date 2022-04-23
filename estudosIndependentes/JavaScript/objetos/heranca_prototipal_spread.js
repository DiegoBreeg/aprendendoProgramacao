function Person(name, age) {
    this.name = name;
    this.age = age;
}

function CoolPerson(name,age){
    Person.call(this, name, age)
    this.cool = 'sou uma pessoas legal'
}

Person.prototype.falaNome = function falaNome() {return `meu nome é ${this.name}`},
Person.prototype.falaIdade = function falaIdade() {return `minha idade é nome é ${this.age}`}


 
CoolPerson.prototype = Object.create(Person.prototype);
CoolPerson.prototype.falaLegal = function falaLegal() {return `Sou uma pessoa`}
CoolPerson.prototype.constructor = CoolPerson;
let diego = new CoolPerson('diego', '26');

console.log(diego.falaNome());
console.log(diego.falaIdade());