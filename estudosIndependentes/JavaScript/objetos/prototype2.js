


function ObjectConstructor(name) {
    this.name = name;

    // return {name};
}

const obj = new ObjectConstructor('canivete');

ObjectConstructor.prototype.abre_latas = function() {console.log('sou um abridor de latas')};

obj.abre_latas();


console.log(obj instanceof ObjectConstructor)