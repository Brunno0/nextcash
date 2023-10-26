import { NextApiRequest, NextApiResponse } from 'next';
import SignupBusiness from './src/business/signupBusiness';
import SignupController from './src/controller/signupController';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';
import { UserDatabase } from './src/database/UserDataBase';

const signupController = 
new SignupController(
    new SignupBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager()
    ));

    const signup = (req: NextApiRequest, res: NextApiResponse) => {
        signupController.signup(req, res);
      };
      
export default signup; 