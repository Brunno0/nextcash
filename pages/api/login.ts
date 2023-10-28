import { NextApiRequest, NextApiResponse } from 'next';
import { TokenManager } from './src/services/TokenManager'; // Importe as dependências necessárias
import UserController from './src/controller/UserController';
import UserBusiness from './src/business/UserBusiness';
import { UserDatabase } from './src/database/UserDataBase';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';

const userController = 
new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new TokenManager()
    ));


const login = (req: NextApiRequest, res: NextApiResponse) => {
    userController.login(req, res);
 };

export default login;
