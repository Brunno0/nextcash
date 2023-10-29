import { NextApiRequest, NextApiResponse } from 'next';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';
import { UserDatabase } from './src/database/UserDataBase';
import UserBusiness from './src/business/UserBusiness';
import UserController from './src/controller/UserController';
import { TokenManager } from './src/services/TokenManager';
import { AccountDataBase } from './src/database/AccountDataBase';

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager(),
    new TokenManager(), 
    new AccountDataBase()
  )
);
//simulando router
const users = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {
    return userController.getUsers(req, res);
  } else if (req.method === 'POST') {
    console.log ("USERs/post")
  } else if (req.method === 'PUT') {
    console.log("USERs/PUTS")
  } else {
    res.status(405).end('Method not allowed');
  }
};

export default users;
