class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(mudanome) {
        this.#nome = mudanome;
    }

    apresentar() {
        return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos`
    }
}

const pessoa1 = new Pessoa('Diego', 26);
console.log(pessoa1.nome);
pessoa1.nome = 'Thiago';
pessoa1.altura = 1.72;
console.log(pessoa1.nome);
