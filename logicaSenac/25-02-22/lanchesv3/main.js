import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho,} from "./captura.js";
import {Cliente} from './cliente';

const cliente = new Cliente();


pizza.addEventListener('click', capturaPreparoPizza);
lanche.addEventListener('click', capturaPreparoLanche);
salgadinho.addEventListener('click', capturaPreparoSalgadinho);
submit.addEventListener('click', criaPedido);



function criaPedido(){    
    cliente.pegaNome();
    console.log(cliente);
}


