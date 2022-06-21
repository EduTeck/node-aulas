import express from "express";

const app = express();

app.get('/', (request, response) => {
    return response.json({ numeroDoPedido: '12776'});
})

app.get('/produtos', (request, response) => {
   const produtos = [
    { id: 1, nome: "Monitor", grupo: 'Eletronico'},
    { id: 2, nome: "Fone", grupo: 'Eletronico' },
    { id: 3, nome: "Notebook", grupo: 'Eletronico' },
    { id: 4, nome: "Geladeira", grupo: 'Eletrodomestico' }
    ];
   
   return response.json({ produtos });
})

app.listen(3333, () => {
    console.log("server iniciado!!!!")
})