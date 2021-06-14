"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const divController_1 = __importDefault(require("../Controllers/divController"));
class DivRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:num:e, contra-e', divController_1.default.getEmpleado);
        this.router.get('/:num:c, contra-s', divController_1.default.getSocio);
    }
}
exports.default = new DivRoutes().router;
