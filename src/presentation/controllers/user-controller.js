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
exports.UserController = void 0;
class UserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const httpRequest = {
                    body: request.body,
                };
                const { name, cpf } = httpRequest.body;
                if (!name || !cpf) {
                    return response.status(400).json({
                        msg: 'Todos os campos são obrigatórios'
                    });
                }
                let httpResponse = yield this.createUserUseCase.handle(httpRequest.body);
                return response.status(201).json(httpResponse);
            }
            catch (error) {
                return response.status(error.code || 500).json(error.message);
            }
        });
    }
}
exports.UserController = UserController;
