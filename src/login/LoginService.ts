import { User, Users } from '../users/UserEntity';
require('dotenv/config');
import UserRepository from '../users/UserRepository';
import jwt from 'jsonwebtoken';

export default class LoginService {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    async login (email: string, password: string): Promise<String> {

        const user = await this.userRepository.findUserByEmail(email);
        if (user && user.password == password){
            return this.generateToken(user); 
        }    
        
        return "Sua senha ou e-mail estão incorretos!";
    }

    generateToken (user: User): String {
        try {

            const token = jwt.sign({user}, String(process.env.SECRET), {
                expiresIn: 30000 // expires in 5min
            });
            
            return token;
        }
        catch (error){
            throw new Error(error);
        }
    }

    verifyToken (token: string): boolean {
        try {
            const result = jwt.verify(token, String(process.env.SECRET));

            return result != undefined;
        }
        catch (error){
            throw new Error(error);
        }
    }
}