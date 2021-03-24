import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.params

      const parsedId = JSON.parse(id)

      const user = this.turnUserAdminUseCase.execute(parsedId)

      return response.json(user)
    } catch (err) {
      return response.status(404).json({ "error": "Invalid User" })
    }
  }
}

export { TurnUserAdminController };
