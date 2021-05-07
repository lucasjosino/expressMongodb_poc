import { User, Users } from "../UserEntity";
import UserRepository from "../UserRepository";


export default class UserRepositoryImpl implements UserRepository {

    async findUserByEmail(email: string): Promise<User> {
        const res = await Users.findOne({email: email});
        return new User(res?.toJSON());
    }

}