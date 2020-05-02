const express = require('express');
const routes = require('./routes')

const app = express();
app.use(express.json());
app.use(routes);

/* catch all (capturar todos os erros)
   links de HTTP Status de erros
   https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status 
*/

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
})

app.listen(3333, ()=> console.log('Servidor ON - Rodando na porta 3333'));