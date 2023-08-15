import express from 'express';
import { route } from '../routes';
const { PORT_SERVER } = process.env;

export class Server {
  private static instance: Server;
  private app = express();
  private port = PORT_SERVER || 3000;
  private path = {
    routeTodo: '/api/todo',
  };

  constructor() {
    this.route();
    return Server.instance || (Server.instance = this);
  }

  private route() {
    this.app.use(this.path.routeTodo, route);
  }

  public init() {
    this.app.listen(this.port, () =>
      console.log(`Server is running on port ${this.port}`)
    );
  }
}
