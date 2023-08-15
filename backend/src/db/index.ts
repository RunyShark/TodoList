import mongoose from 'mongoose';
import { Process, helperService } from '../helper';

enum StatusMongooseDb {
  disconnected = 0,
  connected = 1,
  connecting = 2,
  disconnecting = 3,
}

const mongoConnection = {
  isConnected: 0,
};

export class DB {
  private static instance: DB;

  constructor() {
    return DB.instance || (DB.instance = this);
  }

  public async connect() {
    if (mongoConnection.isConnected) {
      console.log('Ya estabamos conectados');
      return;
    }

    if (mongoose.connections.length > StatusMongooseDb.disconnected) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if (mongoConnection.isConnected === StatusMongooseDb.connected) {
        console.log('Usando conexión anterior');
        return;
      }

      await mongoose.disconnect();
    }
    console.log(
      'Ya estabamos conectados db',
      helperService.getProcess(Process.MONGO_URL)
    );
    await mongoose.connect(helperService.getProcess(Process.MONGO_URL) || '');
    mongoConnection.isConnected = StatusMongooseDb.connected;
  }

  public async disconnect() {
    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === StatusMongooseDb.disconnected) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = StatusMongooseDb.disconnected;

    console.log('Desconectado de MongoDB');
  }
}
