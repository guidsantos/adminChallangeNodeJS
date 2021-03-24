import { Request, Response } from "express";
import { stringify } from "uuid";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params

      const parsedId = JSON.parse(user_id)

      const user = this.showUserProfileUseCase.execute(parsedId)

      return response.json(user)
    } catch (err) {
      return response.status(404).json({ "error": "Invalid User" })
    }
  }
}

export { ShowUserProfileController };
