"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// habilitando suporte a JSON no Express
app.use(express_1.default.json());
app.get('/pegaPlantas', (req, res) => {
    res.status(200).json('Olá, mundo! Primeira rota ta on :D');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
