import express from "express";

// import data from "./data.json";
const app = express();




// Verbos HTTP
//GET:  Receber dados de um Resource.
//POST: Enviar dados ou informações para serem processados por um Resource
//PUT:  Atualizar dados de um Resource
//DELETE:   Deletar um Resource

// http://localhost:3000/clients (URI é o caminho para o resource, clients é o endpoint)

app.get('/clients', (req, res) => {

})
app.get('/clients:id', (req, res) => {})
app.post('/clients', (req, res) => {})
app.put('/clients:id', (req, res) => {})
app.delete('/clients:id', (req, res) => {})

app.listen(3000, () => console.log('server UP'))