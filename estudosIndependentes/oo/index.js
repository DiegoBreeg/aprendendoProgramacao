class Mamifero{
    constructor (nome, especie, idade) {
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.glandula_mamaria = true;
    }

    incrementa_idade(){
        this.idade++;
    }
}

const thor = new Mamifero('cachorro', 'thor', 5);
thor.incrementa_idade();
console.log(thor);