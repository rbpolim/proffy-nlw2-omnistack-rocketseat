import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController

// GET: buscar ou listar uma informação
// POST: criar alguma nova informação existente
// PUT: atualizar uma informação existente
// DELETE: deletar uma informação existente

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;