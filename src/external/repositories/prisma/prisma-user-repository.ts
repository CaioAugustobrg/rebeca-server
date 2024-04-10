import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/usecases/ports/user-repository";
import { PrismaHelper } from "./helpers/prisma-helper";

export class PrismaUserRepository implements UserRepository {

    async findUserByCpf(cpf: string): Promise<User | null> {
        return (
            await PrismaHelper.user.findUnique({
                where: {
                    cpf
                }
            })
        ) as User | null
    }

    async create(props: User): Promise<User | null> {
        if (!props) {
            return null;
        }
        try {
            const user = new User(props);
            const createdUser = await PrismaHelper.user.create({
                data: {
                    id: user.id,
                    cpf: user.cpf,
                    name: user.name,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            });
            return createdUser;
        } catch (error) {
            console.error("Error creating user:", error);
            return null;
        }
    }
}
