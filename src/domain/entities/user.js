"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Entity_1 = require("../core/Entity");
class User extends Entity_1.Entity {
    constructor(props) {
        super();
        this.name = props.name;
        this.cpf = props.cpf;
    }
}
exports.User = User;
