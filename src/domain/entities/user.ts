import { Entity } from '../core/Entity'
export interface UserProps {
  cpf: string
  name: string
}

export class User extends Entity<UserProps> {

  public name: string
  public cpf: string

  public constructor (props: UserProps) {
    super()
    this.name = props.name
    this.cpf = props.cpf
  }
}