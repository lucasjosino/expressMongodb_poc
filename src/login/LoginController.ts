import LoginService from "./LoginService";
import {NextFunction, Request, Response} from "express";
import { Users } from "../users/UserEntity";

export default class LoginController {
    
    loginService: LoginService;
    
    constructor(loginService: LoginService){
        this.loginService = loginService;
    }

    async login(req: Request, res: Response){
        const { email, password } = req.body;
        try{
           const token = await this.loginService.login(email,password);
           return res.status(200).send(token);
        }
        catch (error){
            return res.status(400).send(error);
        }
    }

    verifyToken (req: Request, res: Response, next: NextFunction) {
        try {
            if (req.headers){
                const token = req.headers["authorization"]?.split(" ");
                if (token){
                    const verify = this.loginService.verifyToken(token[1]);
                    if (verify){
                        next();
                    }
                }      
            }
            else
                return res.status(401).send("o token informado não foi autorizado!");
        }
        catch (error){
            return res.status(400).send("o token expirou ou está incorreto!");
        }    
    }

}