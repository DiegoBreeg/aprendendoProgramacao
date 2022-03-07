import { Item } from "./item.js";

export class Lanches extends Item{
    #pao;
    #recheio;
    #molho;    
    
    escolha(pao, recheio, molho){
        console.log("Escolha o tipo do seu pão");
        this.#pao = pao;
        console.log("Escolha seu recheio");
        this.#recheio = recheio;
        console.log("Escolha seu molho");
        this.#molho = molho;
    }
    get echo(){        
        return `pao: ${this.#pao}, Recheio: ${this.#recheio}, Molho: ${this.#molho}`
    }
    
}

