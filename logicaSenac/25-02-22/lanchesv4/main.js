import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho} from "./captura.js";
import {criaPedido} from "./pedido.js";

var item = 'item';



pizza.addEventListener('click', capturaPreparoPizza);
lanche.addEventListener('click', capturaPreparoLanche);
salgadinho.addEventListener('click', capturaPreparoSalgadinho);

_submit.addEventListener('click', anotaPedido);

function mudaItem(produto){
    item = produto;
    console.log(`[main] mudaItem() recived ${item}`);
}

function anotaPedido(){
    var _name = document.querySelector('#_name').value
    var recheioPizza = document.querySelector('#recheioPizza').value
    console.log('[main] anotaPedido send item: ' + item);
    console.log('[main] anotaPedido send cliente _name: ' + _name);
    console.log('[main] anotaPedido send recheioPizza: ' + recheioPizza);
}






export {mudaItem};