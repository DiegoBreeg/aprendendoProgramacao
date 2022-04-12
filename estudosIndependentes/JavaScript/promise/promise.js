const myPromise = new Promise((resolve, reject) => {
    const name = 'Diego';

    if(name === 'Diego') resolve('Usuário encontrado');
    else {reject('O usuário não foi encontrado')}
})

myPromise.then((data) => {
    console.log(data);
})

