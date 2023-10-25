import { NextApiRequest, NextApiResponse } from 'next';
import SignupBusiness from './src/business/signupBusiness';
import SignupController from './src/controller/signupController';
import SignupDatabase from './src/database/signupDatabase';


const signupController = 
new SignupController(
    new SignupBusiness(
        new SignupDatabase()
    ));

    const signup = (req: NextApiRequest, res: NextApiResponse) => {
        signupController.signup(req, res);
      };
      
export default signup; 