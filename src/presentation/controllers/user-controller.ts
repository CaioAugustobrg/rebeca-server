import { Request, Response } from "express";
import { CreateUserUseCase } from "../../domain/usecases/create-user/create-user";
import ApiError from "../../utils/api-error";

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async createUser(request: Request, response: Response) {
    try {
      const httpRequest = {
        body: request.body,
      };
      const { name, cpf } = httpRequest.body;
      if (!name || !cpf) {
        return response.status(400).json({
          msg: 'Todos os campos são obrigatórios'
        })
      }
      let httpResponse = await this.createUserUseCase.handle(httpRequest.body);
      return response.status(201).json(httpResponse)
    } catch (error: any) {
      return response.status(error.code || 500).json(error.message)
    }
  }
}
