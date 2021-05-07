import {User} from '../users/userEntity';

export default interface UserRepository {
    findUserByEmail(email: string): Promise<User>;
}