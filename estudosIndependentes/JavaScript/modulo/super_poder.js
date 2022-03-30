import {Pessoa} from "./pessoa.js";


export class Super_poder extends Pessoa {
    #super_poder;

    constructor(){
        super();
    }

    set muda_poder(super_poder){
        this.#super_poder = super_poder;
    }

    get super_poder(){
        return this.#super_poder;
    }
}