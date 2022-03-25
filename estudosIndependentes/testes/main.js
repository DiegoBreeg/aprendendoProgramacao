


var btn = document.querySelector("#btn");
btn.addEventListener('click', clicar);
btn.addEventListener('mouseout', sair)
btn.addEventListener('mouseenter', entrar)


function clicar() {
    var a = document.querySelector('#btn');
    a.innerHTML = `clicou`;
    a.style.background = 'red';
}

function sair() {
    var a = document.querySelector('#btn');
    a.innerHTML = 'Saiu';
    a.style = 'blue'
}

function entrar() {
    var a = document.querySelector('#btn');
    a.innerHTML = 'Entrou'
}


