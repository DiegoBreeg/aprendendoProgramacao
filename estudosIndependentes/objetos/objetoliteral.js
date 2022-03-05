// Criação de um Objeto literal;
const microfone = {
    cor: "preto",
    is_on: true,
    toggle_on_off(){
        if(microfone.is_on) {
            console.log("desligar");
        } else {
            console.log("ligar");
        }
        microfone.is_on = !microfone.is_on;
    }
}

console.log(microfone.cor);
microfone.toggle_on_off();
microfone.toggle_on_off();