"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_routes_1 = __importDefault(require("./user.routes"));
var router = express_1.default.Router();
router.use('/user', user_routes_1.default);
router.get('/', function (req, res) {
    res.type('text/plain');
    res.send('main');
});
exports.default = router;
