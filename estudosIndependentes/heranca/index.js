class Mamifero{
    constructor(idade){
        this.bebe_leite = true;
        this.tetas = true;
        this.idade = idade;
    }

    incrementa_idade(){
        this.idade++;        
    }
}

class Cachorro extends Mamifero{   
    constructor(){
        super(5);
        this.late = 'late';
    }
}

class Gato extends Mamifero{
    constructor(){
        super(2);
        this.mia = 'mia';
    }
}

const gato = new Gato();
const cachorro = new Cachorro();

cachorro.incrementa_idade();

console.log(cachorro);
console.log(gato);