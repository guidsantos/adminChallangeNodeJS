import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error("This user no exists!")
    }

    const admUser = this.usersRepository.turnAdmin(user)

    return admUser
  }
}

export { TurnUserAdminUseCase };
