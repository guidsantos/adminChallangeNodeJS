import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.params

      const parsedId = JSON.parse(id)

      const user = this.listAllUsersUseCase.execute(parsedId)

      return response.json(user)
    } catch (err) {
      console.log(err.message)
      return response.status(400).json({ "error": "Invalid User" })
    }
  }
}

export { ListAllUsersController };
