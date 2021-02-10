import { Router } from 'express';

import RonaldoController from './controller/RonaldoController';

const routes = Router();

routes.get('/', RonaldoController.index);
routes.get('/:name', RonaldoController.getInfo);

export default routes;
