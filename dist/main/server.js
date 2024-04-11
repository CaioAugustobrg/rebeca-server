"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const host = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '127.0.0.1';
const cors_1 = __importDefault(require("cors"));
// app.use(
//     cors({
//       credentials: true,
//       origin: true
//     })
//   )
app_1.default.use((0, cors_1.default)());
app_1.default.listen(port, () => console.log(`O servidor express está rodando em http://${host}:${port}; pressione CTRL + C para o finaliz`));
