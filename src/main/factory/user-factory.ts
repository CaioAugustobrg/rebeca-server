import { CreateUserUseCase } from "../../domain/usecases/create-user/create-user";
import { PrismaUserRepository } from "../../external/repositories/prisma/prisma-user-repository";
import { UserController } from "../../presentation/controllers/user-controller";

const prismaTruckRepository = new PrismaUserRepository()

const createTruckUseCase = new CreateUserUseCase(
    prismaTruckRepository
)

const userController = new UserController(
    createTruckUseCase
)
export {userController}