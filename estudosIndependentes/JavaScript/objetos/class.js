class Microfone{
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

const microfone = new Microfone();
console.log(microfone.cor.toUpperCase());
microfone.toggle_on_off();
microfone.toggle_on_off();