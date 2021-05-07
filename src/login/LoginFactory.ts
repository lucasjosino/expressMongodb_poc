import UserRepositoryImpl from "../users/impl/UserRepository.impl";
import LoginController from "./LoginController";
import LoginService from "./LoginService";

const userRepositoryImpl = new UserRepositoryImpl();
const loginService = new LoginService(userRepositoryImpl);
const loginController = new LoginController(loginService);

export default loginController;

