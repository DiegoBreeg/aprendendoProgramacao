import http from 'http';

const server = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method)
    console.log('HEADERS: ', req.headers)
    console.log('HTTP VERSÃO: ', req.httpVersion)

    if (req.method === 'POST') {
        res.writeHead(201, {
            'Content-type': 'application/json'
        })
        res.write('{"message": "Recurso criado com sucesso"}')
        res.end()
    }


    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write(`
        <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Servidor Feito Manualmente!</h1>
    </body>
    </html>
    `)

    res.end()
})

server.listen(3000, () => {

    console.log('SERVER UP')
})