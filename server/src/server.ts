import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Corpo (req.body): Dados para criação ou atualização  de um registro
// Routes Params: Indenfiticar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// http://locallhost:3333
app.listen(3333);