//criando um objeto factory

function cria_microfone(cor){
    let is_on = true;    

    function toggle_on_off(){
        if(is_on) {
            console.log("desligar");
        } else {
            console.log("ligar");
    }
    is_on = !is_on;
    }
    return {cor, toggle_on_off}
}


const microfone_preto = cria_microfone('preto');
const microfone_branco = cria_microfone('branco');
console.log(microfone_preto);
console.log(microfone_branco);