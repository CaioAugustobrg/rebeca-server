"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./config/app"));
var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";
app_1.default.listen(host, function () { return console.log("O servidor express est\u00E1 rodando em http://".concat(host, ":").concat(port, "; pressione CTRL + C para finalizar")); });
