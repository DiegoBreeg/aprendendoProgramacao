const myPromise = new Promise((resolve, reject) => {
    const name = 'João';
    if(name === 'Diego')
        resolve('Usuário Diego encontrado');
    else
        reject('Usuário Diego não foi encontrado');
})

myPromise
.then(data => console.log(data))
.catch(err =>console.log(`aconteceu um erro: \n\n${err}`))