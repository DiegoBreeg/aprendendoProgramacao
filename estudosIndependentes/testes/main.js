import escreve from './module.js';

var corpo = document.querySelector('#corpo');

corpo.innerHTML += '<h4>[main.js] innerHTML executado com sucesso!</h4>';
corpo.innerHTML += escreve();