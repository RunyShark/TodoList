import { Request, Response } from 'express';
import { DB } from '../db';
export class TodoController {
  private DB = new DB();

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
