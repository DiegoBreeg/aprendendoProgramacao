class Mamifero{
    constructor (especie, nome, idade) {
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.glandula_mamaria = true;
    }

    incrementa_idade (){
        this.idade++;
    }
}

class Leao extends Mamifero{
    constructor (especie, nome, idade, come_humano){
        super(especie, nome, idade);
        this.come_humano = come_humano;
    }

    come_zebras (animais){
        return animais.filter(animais => animais.especie !== 'zebra');
    }
}

const zeca = new Mamifero ('zebra', 'zeca', 5);
const pompeu = new Mamifero ('gnu', 'pompeu', 5);
const angus = new Mamifero ('cavalo', 'angus', 3);
const mufasa = new Leao ('leao', 'mufasa', 7, false);

const animais = [zeca, pompeu, angus];
mufasa.incrementa_idade();
console.log (mufasa);