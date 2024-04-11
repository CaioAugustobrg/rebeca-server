"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("../routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
// Configure CORS
app.use((0, cors_1.default)({
    origin: 'https://rebbeca-birthday.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
// app.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://rebbeca-birthday.vercel.app, https://rebbeca-birthday.vercel.app"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Origin",
//     "X-Requested-With, Content-Type, Authorization"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,PUT,PATCH,POST,DELETE,OPTIONS"
//   );
//   next();
// });
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)('keyboard cat'));
app.use(routes_1.default);
exports.default = app;
