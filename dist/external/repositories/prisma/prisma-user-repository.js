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
exports.PrismaUserRepository = void 0;
const user_1 = require("../../../domain/entities/user");
const prisma_helper_1 = require("./helpers/prisma-helper");
class PrismaUserRepository {
    findUserByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield prisma_helper_1.PrismaHelper.user.findUnique({
                where: {
                    cpf
                }
            }));
        });
    }
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!props) {
                return null;
            }
            try {
                const user = new user_1.User(props);
                const createdUser = yield prisma_helper_1.PrismaHelper.user.create({
                    data: {
                        id: user.id,
                        cpf: user.cpf,
                        name: user.name,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                });
                return createdUser;
            }
            catch (error) {
                console.error("Error creating user:", error);
                return null;
            }
        });
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
