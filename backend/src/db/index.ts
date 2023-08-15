import mongoose from 'mongoose';

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
  private DB_API = process.env.MONGO_URL || '';

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

    await mongoose.connect(this.DB_API);
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
