export class Pessoa {
    #nome;
    #idade;

    set nome(nome){
        this.#nome = nome;
    }
    set idade(idade){
        this.#idade = idade;
    }
    echo(){          
        return `Meu nome é ${this.#nome}, tenho ${this.#idade} anos e meu super poder é ${this.super_poder}`
    }   
}

