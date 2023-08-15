import { Request, Response } from 'express';

export class TodoController {
  async getTodo(req: Request, res: Response) {
    res.json({
      message: 'test',
    });
  }
  async posTodo(req: Request, res: Response) {
    res.json({
      message: 'test',
    });
  }
  async deleteTodo(req: Request, res: Response) {
    res.json({
      message: 'test',
    });
  }
  async updateTodo(req: Request, res: Response) {
    res.json({
      message: 'test',
    });
  }
}

export const todoController = new TodoController();
