const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json([
    { name: '', password: '' },
   
  ]);
});

app.listen(4567, () => {
  console.log('Servidor escutando na porta 3000');
});