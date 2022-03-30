//criação de objetos por prototype
function Microfone(cor = 'preto') {
    this.cor = cor;
    this.toggle_on_off = true;
}

Microfone.prototype.toggle_on_off = function (){
    if(this.is_on) {
        console.log("desligar");
    } else {
        console.log("ligar");
}
is_on = !is_on;
}

const microfone = new Microfone();
const microfone2 = new Microfone('branco');


console.log(microfone);
console.log(microfone2);

microfone2.toggle_on_off();