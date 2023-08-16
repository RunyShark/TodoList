"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperService = exports.Process = void 0;
const uuid_1 = require("uuid");
var Process;
(function (Process) {
    Process["PORT_SERVER"] = "PORT_SERVER";
    Process["FRONTEND_URL"] = "FRONTEND_URL";
    Process["MONGO_URL"] = "MONGO_URL";
    Process["NODE_ENV"] = "NODE_ENV";
})(Process || (exports.Process = Process = {}));
class HelperService {
    uuid() {
        return (0, uuid_1.v4)();
    }
    getProcess(key) {
        return process.env[key];
    }
}
exports.helperService = new HelperService();
