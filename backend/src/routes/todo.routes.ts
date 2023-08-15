import { Router } from 'express';
import { todoController } from '../controllers';

export const route = Router();
route.get('/seed', todoController.seedTodo.bind(todoController));
route.get('/', todoController.getTodo.bind(todoController));
route.post('/', todoController.postTodo.bind(todoController));
route.delete(`/:id`, todoController.deleteTodo.bind(todoController));
route.put(`/:id`, todoController.updateTodo.bind(todoController));

export default route;
