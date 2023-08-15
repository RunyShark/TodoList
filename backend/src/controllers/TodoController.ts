import { TodoModel } from '../models/Todo';
import { Request, Response } from 'express';
import { DB } from '../db';
import { seedData } from '../db/seed';
import { Process, helperService } from '../helper';

enum ENV {
  prod = 'prod',
  dev = 'dev',
}

export class TodoController {
  private DB = new DB();

  async seedTodo(req: Request, res: Response) {
    if (helperService.getProcess(Process.NODE_ENV) !== ENV.dev)
      return res
        .status(401)
        .json({ message: 'No tiene acceso a este servicio' });

    await this.DB.connect();
    await TodoModel.deleteMany();
    await TodoModel.insertMany(seedData.entries);
    await this.DB.disconnect();

    res.json({ message: 'Ok' });
  }

  async getTodo(req: Request, res: Response) {
    res.json({
      message: 'test',
    });
  }

  async postTodo(req: Request, res: Response) {
    console.log({ body: req.body });

    const newTodo = new TodoModel({
      ...req.body,
    });

    try {
      await this.DB.connect();
      await newTodo.save();
      await this.DB.disconnect();

      return res.status(201).json(newTodo);
    } catch (error) {
      await this.DB.disconnect();
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Algo salio mal, revisar consola del servidor' });
    }
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
