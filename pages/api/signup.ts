import { NextApiRequest, NextApiResponse } from 'next';
import SignupBusiness from './src/business/signupBusiness';
import SignupController from './src/controller/signupController';
import SignupDatabase from './src/database/signupDatabase';
import { IdGenerator } from './src/services/IdGenerator';


const signupController = 
new SignupController(
    new SignupBusiness(
        new SignupDatabase(),
        new IdGenerator()
    ));

    const signup = (req: NextApiRequest, res: NextApiResponse) => {
        signupController.signup(req, res);
      };
      
export default signup; 