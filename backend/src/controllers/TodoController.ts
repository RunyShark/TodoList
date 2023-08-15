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

  private async ErrorControl(res: Response): Promise<void> {
    await this.DB.disconnect();
    res.status(500).json({ message: 'Hubo un problema inesperado error' });
  }

  async seedTodo(req: Request, res: Response): Promise<void> {
    if (helperService.getProcess(Process.NODE_ENV) !== ENV.dev) {
      res.status(401).json({ message: 'No tiene acceso a este servicio' });
      return;
    }

    await this.DB.connect();
    await TodoModel.deleteMany();
    await TodoModel.insertMany(seedData.entries);
    await this.DB.disconnect();

    res.json({ message: 'Ok' });
  }

  async getTodo(req: Request, res: Response): Promise<void> {
    try {
      await this.DB.connect();
      const entries = await TodoModel.find().sort({ createdAt: 'ascending' });
      await this.DB.disconnect();

      res.status(200).json(entries);
    } catch (error) {
      this.ErrorControl(res);
    }
  }

  async postTodo(req: Request, res: Response): Promise<void> {
    console.log({ body: req.body });

    const newTodo = new TodoModel({
      ...req.body,
    });

    try {
      await this.DB.connect();
      await newTodo.save();
      await this.DB.disconnect();

      res.status(201).json(newTodo);
    } catch (error) {
      this.ErrorControl(res);
    }
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    try {
      await this.DB.connect();
      const deletedTodo = await TodoModel.findByIdAndDelete(id);
      await this.DB.disconnect();

      if (!deletedTodo)
        res.status(404).json({
          message: 'No se encontró el elemento a eliminar',
        });

      res.json({
        message: 'OK',
      });
    } catch (error) {
      this.ErrorControl(res);
    }
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    await this.DB.connect();

    const entryToUpdate = await TodoModel.findById(id);

    if (!entryToUpdate) {
      await this.DB.disconnect();
      res.status(400).json({ message: 'No hay entrada con ese ID: ' + id });
      return;
    }

    try {
      entryToUpdate.set(req.body);

      const updatedEntry = await entryToUpdate.save();

      await this.DB.disconnect();
      res.status(200).json(updatedEntry);
    } catch (error: any) {
      console.log(error);
      this.ErrorControl(res);
    }
  }
}

export const todoController = new TodoController();
