import { NextApiRequest, NextApiResponse } from 'next';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';
import { UserDatabase } from './src/database/UserDataBase';
import UserBusiness from './src/business/UserBusiness';
import UserController from './src/controller/UserController';
import { TokenManager } from './src/services/TokenManager';

const userController = 
new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new TokenManager()
    ));

    const signup = (req: NextApiRequest, res: NextApiResponse) => {
        userController.signup(req, res);
      };
      
export default signup; 