const myPromise = new Promise((resolve, reject) => {
    const name = 'Diego';
    if(name === 'Diego')
        resolve('Usuário Diego encontrado');
    else
        reject('Usuário Diego não foi encontrado');
})

myPromise.then(data => data.toLowerCase()).then(data => console.log(data));