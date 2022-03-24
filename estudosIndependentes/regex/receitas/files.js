const fs = require('fs');

const read = nomeArquivo => {
    return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, {encoding: 'utf8'})
}


const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, {enconding: 'utf8'})

}

module.export = {read, write}
