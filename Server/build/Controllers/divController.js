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
const database_1 = __importDefault(require("../database"));
class DivController {
    getEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { num_e } = req.params;
            const { contra_e } = req.params;
            const var1 = yield database_1.default.query('SELECT * FROM empleados WHERE num_e = ?', [num_e]);
            const var2 = yield database_1.default.query('SELECT * FROM empleados WHERE contra_e = ?', [contra_e]);
            console.log(var1.length);
            console.log(var2.length);
            if (var1.length > 0 && var2.length > 0) {
                return res.json(var1[0] + var2[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
    getSocio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { num_c } = req.params;
            const { contra_s } = req.params;
            const var1 = yield database_1.default.query('SELECT * FROM empleados WHERE num_e = ?', [num_c]);
            const var2 = yield database_1.default.query('SELECT * FROM empleados WHERE contra_e = ?', [contra_s]);
            console.log(var1.length);
            console.log(var2.length);
            if (var1.length > 0 && var2.length > 0) {
                return res.json(var1[0] + var2[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
}
const divController = new DivController;
exports.default = divController;
