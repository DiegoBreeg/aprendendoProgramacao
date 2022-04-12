let marmota = x => {

let verifica = x => {
    if(x < 0)
        throw x;
    else console.log('x é positivo!');
}

    try {
        verifica(x);
    }
    catch(error) {
        x = error * (-1);
        console.log('x é negativo, seu sinal será invertido');
    }
    finally {
        console.log(x);
    }
}

marmota(2);
marmota(-5);
marmota(-1);