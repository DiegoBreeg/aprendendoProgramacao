import { Item } from "./item.js";

export class Pizza extends Item{
    #recheio;
    #borda_recheada;
    #molho;

     escolha(recheio, borda_recheada, molho){
        console.log("Escolha seu recheio");
        this.#recheio = recheio;
        console.log("Aceita borda recheada?");
        this.#borda_recheada = borda_recheada;
        console.log("Escolha seu molho");
        this.#molho = molho;
    }
    get echo(){        
        return `Recheio: ${this.#recheio}, Borda Recheada? ${this.#borda_recheada}, Molho: ${this.#molho}`
    }
}