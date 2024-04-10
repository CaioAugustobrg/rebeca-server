/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from 'express'
import { userController } from '../factory/user-factory'

const UserRouter = express.Router()

UserRouter.post(
  '/create',
  async (request: Request, response: Response) => {
    return await userController.createUser(request, response)
  }
)


export default UserRouter