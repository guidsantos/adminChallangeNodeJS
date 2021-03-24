import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error('This User Non Exists!')
    }

    return user
  }
}

export { ShowUserProfileUseCase };
