import express from 'express';
import mongoose from 'mongoose';
import {router} from './router';
import path from 'node:path';


mongoose.connect('mongodb://localhost:27017')
  .then(()=> {
    console.log('Conectado com sucesso ao banco de dados.');
    const app = express();
    const PORT = 3000;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
    app.listen(3000, ()=> {
      console.log(`⚡ Server is runnig on ${PORT}`);
    });
  })
  .catch(()=> console.log('Erro ao conectar no banco de dados!'));







