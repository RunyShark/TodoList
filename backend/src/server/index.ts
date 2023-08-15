import express from 'express';
import { route } from '../routes';
import { Process, helperService } from '../helper';
import morgan from 'morgan';
import cors from 'cors';

export class Server {
  private static instance: Server;
  private app = express();
  private port = helperService.getProcess(Process.PORT_SERVER) || 3000;
  private path = {
    routeTodo: '/api/todo',
  };

  constructor() {
    this.middleware();
    this.route();
    return Server.instance || (Server.instance = this);
  }

  private middleware() {
    [express.json(), morgan('dev'), cors()].forEach((cb) => this.app.use(cb));
  }

  private route() {
    this.app.use(this.path.routeTodo, route);
  }

  public init() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
