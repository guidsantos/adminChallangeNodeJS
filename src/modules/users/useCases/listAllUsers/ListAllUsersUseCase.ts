import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User[] {
    const user = this.usersRepository.findById(user_id)

    if (!user || user.admin === false) {
      throw new Error("Invalid User")
    }

    const allUsers = this.usersRepository.list()

    return allUsers

  }
}

export { ListAllUsersUseCase };
