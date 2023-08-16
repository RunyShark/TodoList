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
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = exports.TodoController = void 0;
const Todo_1 = require("../models/Todo");
const db_1 = require("../db");
const seed_1 = require("../db/seed");
const helper_1 = require("../helper");
var ENV;
(function (ENV) {
    ENV["prod"] = "prod";
    ENV["dev"] = "dev";
})(ENV || (ENV = {}));
class TodoController {
    constructor() {
        this.DB = new db_1.DB();
    }
    ErrorControl(res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.DB.disconnect();
            res.status(500).json({ message: 'Hubo un problema inesperado error' });
        });
    }
    seedTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (helper_1.helperService.getProcess(helper_1.Process.NODE_ENV) !== ENV.dev) {
                res.status(401).json({ message: 'No tiene acceso a este servicio' });
                return;
            }
            yield this.DB.connect();
            yield Todo_1.TodoModel.deleteMany();
            yield Todo_1.TodoModel.insertMany(seed_1.seedData.entries);
            yield this.DB.disconnect();
            res.json({ message: 'Ok' });
        });
    }
    getTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.DB.connect();
                const entries = yield Todo_1.TodoModel.find().sort({ createdAt: 'ascending' });
                yield this.DB.disconnect();
                res.status(200).json(entries);
            }
            catch (error) {
                this.ErrorControl(res);
            }
        });
    }
    postTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ body: req.body });
            const newTodo = new Todo_1.TodoModel(Object.assign({}, req.body));
            try {
                yield this.DB.connect();
                yield newTodo.save();
                yield this.DB.disconnect();
                res.status(201).json(newTodo);
            }
            catch (error) {
                this.ErrorControl(res);
            }
        });
    }
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield this.DB.connect();
                const deletedTodo = yield Todo_1.TodoModel.findByIdAndDelete(id);
                yield this.DB.disconnect();
                if (!deletedTodo)
                    res.status(404).json({
                        message: 'No se encontró el elemento a eliminar',
                    });
                res.json({
                    message: 'OK',
                });
            }
            catch (error) {
                this.ErrorControl(res);
            }
        });
    }
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.DB.connect();
            const entryToUpdate = yield Todo_1.TodoModel.findById(id);
            if (!entryToUpdate) {
                yield this.DB.disconnect();
                res.status(400).json({ message: 'No hay entrada con ese ID: ' + id });
                return;
            }
            try {
                entryToUpdate.set(req.body);
                const updatedEntry = yield entryToUpdate.save();
                yield this.DB.disconnect();
                res.status(200).json(updatedEntry);
            }
            catch (error) {
                console.log(error);
                this.ErrorControl(res);
            }
        });
    }
}
exports.TodoController = TodoController;
exports.todoController = new TodoController();
