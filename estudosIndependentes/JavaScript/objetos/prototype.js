//criação de objetos por prototype: factory classificadora!
function cria_microfone_classificadora(cor = 'preto') {
    this.cor = cor;
    this.is_on = true;
}

cria_microfone_classificadora.prototype.toggle_on_off = function (){
    if(this.is_on) 
        console.log("desligar");
     else 
        console.log("ligar");

    this.is_on = !this.is_on;
}

const microfone_classificado = new cria_microfone_classificadora();

console.log(microfone_classificado);
microfone_classificado.toggle_on_off();