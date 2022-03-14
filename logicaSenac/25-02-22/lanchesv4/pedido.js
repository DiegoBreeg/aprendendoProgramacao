import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho} from "./captura.js";
import {mudaItem} from './main.js';


function criaPedido (nome, valor, validade, peso, preparo){  
    return {           
        nome: nome,
        item,
        valor: valor,
        validade: validade,
        peso: peso,
        preparo: preparo
    }
}






export {criaPedido};