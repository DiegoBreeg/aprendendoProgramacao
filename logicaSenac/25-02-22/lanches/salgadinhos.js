import { Item } from "./item.js";

export class Salgadinhos extends Item {

    #tipo;
    #massa;
    #recheio;

    escolha(tipo, massa, recheio){
        console.log("Assado ou frito?");
        this.#tipo = tipo;
        console.log("Escolha sua massa");
        this.#massa = massa;
        console.log("Escolha seu recheio");
        this.#recheio = recheio;
    }
    get echo(){        
        return `Tipo: ${this.#tipo}, Massa: ${this.#massa}, Recheio: ${this.#recheio}`
    }    
}

