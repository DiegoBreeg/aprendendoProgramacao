import express from "express";
import bodyParser from "body-parser";

export const app = express()

app.use(bodyParser.json())

const port = 3000;

app.get('/teste', (req, res) => res
    .status(200)
    .send('<h1>Bem vindo à minha página<h1>'))

app.get('/outroteste', (req, res) => res
    .status(200)
    .send('<h1>Outra página<h1>'))

app.listen(port, () => console.log(`servidor está funcionando na porta ${port}`))
