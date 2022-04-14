//criando um objeto factory: factory objetificadora!

function cria_microfone_objetificadora(cor){
    let is_on = true;

    function toggle_on_off(){
        if(is_on)
            console.log("desligar");
        else 
            console.log("ligar");
        
        is_on = !is_on;
    }
    return {cor, is_on, toggle_on_off}
}

const microfone_objetificado_branco = cria_microfone_objetificadora('branco');

console.log(microfone_objetificado_branco);
microfone_objetificado_branco.toggle_on_off();
