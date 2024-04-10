import { type User } from '../../entities/user'

export interface UserRepository {
  create: (props: User) => Promise<User | null>
  findUserByCpf: (cpf: string) => Promise<User | null>
}