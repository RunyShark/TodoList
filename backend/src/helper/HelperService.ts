import { v4 } from 'uuid';

export enum Process {
  PORT_SERVER = 'PORT_SERVER',
  FRONTEND_URL = 'FRONTEND_URL',
  MONGO_URL = 'MONGO_URL',
  NODE_ENV = 'NODE_ENV',
}

class HelperService {
  public uuid() {
    return v4();
  }

  public getProcess(key: Process) {
    return process.env[key];
  }
}

export const helperService = new HelperService();
