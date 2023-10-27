import { NextApiRequest, NextApiResponse } from 'next';
import { IdGenerator } from './src/services/IdGenerator';
import { HashManager } from './src/services/HashManager';
import { UserDatabase } from './src/database/UserDataBase';
import UserBusiness from './src/business/UserBusiness';
import UserController from './src/controller/UserController';

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager()
  )
);
//simulando router
const users = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("chegou")
  if (req.method === 'GET') {
    return userController.getUsers(req, res);
  } else if (req.method === 'POST') {
    console.log ("USER/post")
  } else if (req.method === 'PUT') {
    console.log("USER/PUTS")
  } else {
    res.status(405).end('Method not allowed');
  }
};

export default users;
