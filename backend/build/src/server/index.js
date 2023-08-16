"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const helper_1 = require("../helper");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = helper_1.helperService.getProcess(helper_1.Process.PORT_SERVER) || 3000;
        this.path = {
            routeTodo: '/api/todo',
        };
        this.middleware();
        this.route();
        return Server.instance || (Server.instance = this);
    }
    middleware() {
        [express_1.default.json(), (0, morgan_1.default)('dev'), (0, cors_1.default)()].forEach((cb) => this.app.use(cb));
    }
    route() {
        this.app.use(this.path.routeTodo, routes_1.route);
    }
    init() {
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }
}
exports.Server = Server;
