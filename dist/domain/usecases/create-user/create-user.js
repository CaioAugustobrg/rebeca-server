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
exports.CreateUserUseCase = void 0;
const api_error_1 = __importDefault(require("../../../utils/api-error"));
class CreateUserUseCase {
    constructor(prismaUserRepository) {
        this.prismaUserRepository = prismaUserRepository;
    }
    handle(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let findByCpf = yield this.prismaUserRepository.findUserByCpf(props.cpf);
                if (findByCpf) {
                    throw new api_error_1.default({
                        code: 409,
                        message: 'Já existe um convidado confirmado com esse CPF'
                    });
                }
                yield this.prismaUserRepository.create(props);
                return null;
            }
            catch (error) {
                throw new api_error_1.default({
                    code: error.code,
                    message: error.message
                });
            }
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
