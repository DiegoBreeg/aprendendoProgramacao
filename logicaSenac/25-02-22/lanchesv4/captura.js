import {mudaItem} from './main.js'



function capturaPreparoPizza() {
    console.log(`[captura] capturaPreparoPizza() você clicou em pizza`);
    console.log(`[captura] capturaPreparoPizza() {Injetando HTML}`);
    var preparo = document.querySelector('#preparo');
    preparo.innerHTML =
        `<p>Selecione o preparo da sua <strong>Pizza</strong></p>`;
    preparo.innerHTML += 
        `<label for='recheioPizza'>Recheio</label>
        <select name='recheioPizza' id='recheioPizza'>
            <option value='calabresa'>Calabresa</option>
            <option value='portuguesa'>Portuguesa</option>
            <option value='marguerita'>Marguerita</option>
        </select>
        <label for='bordaPizza'>Borda Recheada?</label>
        <select name='bordaPizza' id='bordaPizza'>
            <option value='sim'>sim</option>
            <option value='nao'>nao</option>                
        </select>
        <label for='molhoPizza'>Molho</label>
        <select name='molhoPizza' id='molhoPizza'>
            <option value='tomate'>Tomate</option>
            <option value='branco'>Molho Branco</option>
            <option value='cremoso'>Cremoso</option>
        </select>`        
        mudaItem('pizza');
        console.log(`[captura] capturaPreparoPizza() {/Injetando HTML}`);
    }
    
function capturaPreparoLanche() { 
    console.log(`[captura] capturaPreparoLanche() você clicou em lanche`);
    console.log(`[captura] capturaPreparoLanche() {Injetando HTML}`); 
    var preparo = document.querySelector('#preparo');
    preparo.innerHTML =
        `<p>Selecione o preparo do seu <strong>Lanche</strong></p>`;
    preparo.innerHTML += 
        `<label for='paoLanche'>Tipo de pão</label>
        <select name='paoLanche' id='paoLanche'>
            <option value='comum'>Pão Comum</option>
            <option value='integral'>Pão Integral</option>
            <option value='nozes'>Pão com Nozes</option>
        </select>
        <label for='recheioLanche'>Recheio</label>
        <select name='recheioLanche' id='recheioLanche'>
            <option value='presunto'>Presunto</option>
            <option value='bacon'>Bacon</option>
            <option value='queijo'>Queijo</option>    
        </select>
        <label for='molhoLanche'>Molho</label>
        <select name='molhoLanche' id='molhoLanche'>
            <option value='tomate'>Tomate</option>
            <option value='ricota'>Ricota</option>
            <option value='catupiry'>Catupiry</option>
        </select>`
        mudaItem('lanche');
        console.log(`[captura] capturaPreparoLanche() {/Injetando HTML}`);
    }
    
function capturaPreparoSalgadinho() {
    console.log(`[captura] capturaPreparoSalgadinho() você clicou em salgadinho`);
    console.log(`[captura] capturaPreparoSalgadinho() {Injetando HTML}`);
    var preparo = document.querySelector('#preparo');
    preparo.innerHTML = '<p>Selecione o preparo de seu <strong>Salgadinho</strong></p>';
    preparo.innerHTML +=
        `<label for='tipoSalgadinho'>Tipo de pão</label>
        <select name='tipoSalgadinho' id='tipoSalgadinho'>
            <option value='frito'>Frito</option>
            <option value='assado'>Assado</option>                
        </select>
        <label for='massaSalgadinho'>Recheio</label>
        <select name='massaSalgadinho' id='massaSalgadinho'>
            <option value='trigo'>Farinha de Trigo</option>
            <option value='integral'>Integral</option>
            <option value='aveia'>Massa de Aveia</option>    
        </select>
        <label for='recheioSalgadinho'>Molho</label>
        <select name='recheioSalgadinho' id='recheioSalgadinho'>
            <option value='frango'>Frango</option>
            <option value='presuntoQueijo'>Presunto e Queijo</option>
            <option value='palmito'>Palmito</option>
        </select>`
        mudaItem('salgadinho');
        console.log(`[captura] capturaPreparoSalgadinho() {/Injetando HTML}`);
    }

export {capturaPreparoPizza, capturaPreparoLanche, capturaPreparoSalgadinho};