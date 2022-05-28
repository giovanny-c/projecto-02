import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface UserResponse {
    name: string
    email: string
}

@injectable()
class GetProfileUseCase {


    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id: string): Promise<UserResponse> {

        const user = await this.usersRepository.findById(id)



        return {
            name: user.name,
            email: user.email
        }
    }
}

export { GetProfileUseCase }