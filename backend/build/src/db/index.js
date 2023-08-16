"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const helper_1 = require("../helper");
var StatusMongooseDb;
(function (StatusMongooseDb) {
    StatusMongooseDb[StatusMongooseDb["disconnected"] = 0] = "disconnected";
    StatusMongooseDb[StatusMongooseDb["connected"] = 1] = "connected";
    StatusMongooseDb[StatusMongooseDb["connecting"] = 2] = "connecting";
    StatusMongooseDb[StatusMongooseDb["disconnecting"] = 3] = "disconnecting";
})(StatusMongooseDb || (StatusMongooseDb = {}));
const mongoConnection = {
    isConnected: 0,
};
class DB {
    constructor() {
        return DB.instance || (DB.instance = this);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (mongoConnection.isConnected) {
                console.log('Ya estabamos conectados');
                return;
            }
            if (mongoose_1.default.connections.length > StatusMongooseDb.disconnected) {
                mongoConnection.isConnected = mongoose_1.default.connections[0].readyState;
                if (mongoConnection.isConnected === StatusMongooseDb.connected) {
                    console.log('Usando conexión anterior');
                    return;
                }
                yield mongoose_1.default.disconnect();
            }
            console.log('Ya estabamos conectados db', helper_1.helperService.getProcess(helper_1.Process.MONGO_URL));
            yield mongoose_1.default.connect(helper_1.helperService.getProcess(helper_1.Process.MONGO_URL) || '');
            mongoConnection.isConnected = StatusMongooseDb.connected;
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (process.env.NODE_ENV === 'development')
                return;
            if (mongoConnection.isConnected === StatusMongooseDb.disconnected)
                return;
            yield mongoose_1.default.disconnect();
            mongoConnection.isConnected = StatusMongooseDb.disconnected;
            console.log('Desconectado de MongoDB');
        });
    }
}
exports.DB = DB;
