import { Router } from 'express';
import { todoController } from '../controllers';

export const route = Router();

route.get('/', todoController.getTodo.bind(todoController));
route.post('/', todoController.posTodo.bind(todoController));
route.delete(`/:id`, todoController.deleteTodo.bind(todoController));
route.put(`/:id`, todoController.updateTodo.bind(todoController));

export default route;
