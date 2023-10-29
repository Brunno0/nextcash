import { NextApiRequest, NextApiResponse } from 'next';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';
import { UserDatabase } from './src/database/UserDataBase';
import UserBusiness from './src/business/UserBusiness';
import UserController from './src/controller/UserController';
import { TokenManager } from './src/services/TokenManager';
import { AccountDataBase } from './src/database/AccountDataBase';

const userController = 
new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new TokenManager(),
        new AccountDataBase()
    ));

    const signup = (req: NextApiRequest, res: NextApiResponse) => {
        userController.signup(req, res);
      };
      
export default signup; 