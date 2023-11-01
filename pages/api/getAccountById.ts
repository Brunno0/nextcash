import { NextApiRequest, NextApiResponse } from 'next';
import AccountBusiness from './src/business/AccountBusiness';
import { TokenManager } from './src/services/TokenManager';
import { AccountDataBase } from './src/database/AccountDataBase';
import { GetUsersSchema } from './src/dtos/getUsers.dto';
import { ZodError } from 'zod';
import { BaseError } from './src/errors/BaseError';

const accountBusiness = new AccountBusiness(
  new AccountDataBase(),
  new TokenManager()
);

const getAccountById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const input = GetUsersSchema.parse({
      token: req.headers.authorization
    });
    const output = await accountBusiness.getAccountById(input);
    res.status(200).json(output); 

  } catch (error: any) {
  
    if (error instanceof ZodError) {
      
      res.status(400).send(error.issues);
      
    } else if (error instanceof BaseError) {

      res.status(error.statusCode).json({
        error: error.message,
        details: error.message
      });

    } else {
      res.status(500).json({
        error: 'Internal error',
        details: error.message
      });
    }
  }
};

export default getAccountById;
