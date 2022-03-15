import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho} from "./captura.js";
import {mudaItem} from './main.js';


function pedido (item, valor, validade, peso, preparo){ 
    return {           
        item,
        valor,
        validade,
        peso,
        preparo,
    }
}

    






export {pedido};