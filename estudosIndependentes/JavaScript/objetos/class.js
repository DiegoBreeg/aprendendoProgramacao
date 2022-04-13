//classe comu: classe classificadora!
class Microfone_classificadora{
    constructor(cor = 'preto'){
        this.cor = cor;
        this.is_on = true;
    }

    toggle_on_off(){
        if(this.is_on) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        this.is_on = !this.is_on;
    }

}

const microfone_classe_classificado = new Microfone_classificadora();
console.log(microfone_classe_classificado);
microfone_classe_classificado.toggle_on_off();

