import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User {
    const user = this.usersRepository.findById(user_id)

    if (user.admin === true) {
      throw new Error("This user already is admin!")
    }

    this.usersRepository.turnAdmin(user)

    return user
  }
}

export { TurnUserAdminUseCase };
