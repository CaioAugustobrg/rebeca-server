import { PrismaUserRepository } from "../../../external/repositories/prisma/prisma-user-repository";
import ApiError from "../../../utils/api-error";
import { User, UserProps } from "../../entities/user";

export class CreateUserUseCase {
    constructor(
        private readonly prismaUserRepository: PrismaUserRepository
    ) {}
    async handle (
        props: User
    ): Promise<null | ApiError> {
            try {
                let findByCpf = await this.prismaUserRepository.findUserByCpf(props.cpf)
                if (findByCpf) {
                    throw new ApiError({
                        code: 409,
                        message: 'Já existe um convidado confirmado com esse CPF'
                      })
                }
                await this.prismaUserRepository.create(props)
                return null
            } catch (error: any) {
                throw new ApiError({
                    code: error.code,
                    message: error.message
                  })
            }
       
    }
}