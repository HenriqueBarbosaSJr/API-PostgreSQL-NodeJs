const express = require('express');
const knex = require('./database/index.js');

const app = express();


app.get('/users', (req, res)=>{
    knex('users').then((results)=>{
        return res.json(results);
    })

});


app.listen(3333, ()=> console.log('Servidor ON - Rodando na porta 3333'));