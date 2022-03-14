import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho,} from "./captura.js";
import {cliente} from './main.js';

   



class Cliente {
    constructor(){
        this.nome;
        this.item = {};
    } 
     pegaNome(){
        this.nome = document.querySelector('#_name').value;        
        console.log(this.nome);
        
    }
}



export {Cliente};

