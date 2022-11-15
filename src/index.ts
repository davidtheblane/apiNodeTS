import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(()=> {
    console.log('Conectado com sucesso ao banco de dados.');
    const app = express();

    const PORT = 3000;
    app.listen(3000, ()=> {
      console.log(`⚡ Server is runnig on ${PORT}`);
    });
  })
  .catch(()=> console.log('Erro ao conectar no banco de dados!'));







