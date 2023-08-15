import express from 'express';
const { PORT_SERVER } = process.env;

export class Server {
  private static instance: Server;
  private app = express();
  private port = PORT_SERVER || 3000;
  private path = {
    routeTodo: '/api/todo',
  };

  constructor() {
    return Server.instance || (Server.instance = this);
  }

  public init() {
    this.app.listen(this.port, () =>
      console.log(`Server is running on port ${this.port}`)
    );
  }
}
