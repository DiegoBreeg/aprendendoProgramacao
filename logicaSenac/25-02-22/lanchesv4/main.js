import {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho} from "./captura.js";
import {pedido} from "./pedido.js";


var item = 'item';
const cliente = [];

function mudaItem(produto){
    item = produto;
}



pizza.addEventListener('click', capturaPreparoPizza);
lanche.addEventListener('click', capturaPreparoLanche);
salgadinho.addEventListener('click', capturaPreparoSalgadinho);
criarCliente.addEventListener('click', criaCliente);

function criaCliente() {
    var _name = document.querySelector('#_name').value    
    cliente[0] = _name;
    console.log('[main] criaCliente criou: ' + cliente)
}

_submit.addEventListener('click', anotaPedido);






function anotaPedido(){    
    
    if(item == 'pizza') {
        var recheioPizza = document.querySelector('#recheioPizza').value;
        var bordaPizza = document.querySelector('#bordaPizza').value;
        var molhoPizza = document.querySelector('#molhoPizza').value;        
        console.log('[main] anotaPedido(){pizza}');
        var preparo = {recheio: recheioPizza, borda: bordaPizza, molho: molhoPizza};
        cliente.push(pedido(item, 1, '01-12-22', '50g', preparo));
        console.log(cliente);
        console.log('[main] anotaPedido(){/pizza}');
    } else if(item == 'lanche') {
        var paoLanche = document.querySelector('#paoLanche').value;
        var recheioLanche = document.querySelector('#recheioLanche').value;
        var molhoLanche = document.querySelector('#molhoLanche').value;
        console.log('[main] anotaPedido(){lanche}');
        console.log('[main] anotaPedido() send item: ' + item);        
        console.log('[main] anotaPedido() send paoLanche: ' + paoLanche);
        console.log('[main] anotaPedido() send recheioLanche: ' + recheioLanche);
        console.log('[main] anotaPedido() send molhoLanche: ' + molhoLanche);
        console.log('[main] anotaPedido(){/lanche}');
    } else if(item == 'salgadinho') {
        var tipoSalgadinho = document.querySelector('#tipoSalgadinho').value;
        var massaSalgadinho = document.querySelector('#massaSalgadinho').value;
        var recheioSalgadinho = document.querySelector('#recheioSalgadinho').value;
        console.log('[main] anotaPedido(){salgadinho}');
        console.log('[main] anotaPedido() send item: ' + item);        
        console.log('[main] anotaPedido() send tipoSalgadinho: ' + tipoSalgadinho);
        console.log('[main] anotaPedido() send massaSalgadinho: ' + massaSalgadinho);
        console.log('[main] anotaPedido() send recheioSalgadinho: ' + recheioSalgadinho);
        console.log('[main] anotaPedido(){/salgadinho}');
    }
    
}





export {mudaItem};