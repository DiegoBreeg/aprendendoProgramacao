function Person(name, age) {
    this.name = name;
    this.age = age;
}

function CoolPerson(name,age){
    Person.call(this, name, age)
    this.cool = 'sou uma pessoas legal'
}

Person.prototype = {
    falaNome: function falaNome() {return `meu nome é ${this.name}`},
    falaIdade: function falaIdade() {return `minha idade é nome é ${this.age}`}
}

CoolPerson.prototype = {...Person.prototype} //ao invés de usar Object.create() para copiar o prototype simplesmente dei um spread.

const diego = new CoolPerson('diego', '26');

console.log(diego.falaNome());
console.log(diego.falaIdade());