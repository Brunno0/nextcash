import { NextApiRequest, NextApiResponse } from 'next';
import AccountBusiness from './src/business/AccountBusiness';
import { TokenManager } from './src/services/TokenManager';
import { AccountDataBase } from './src/database/AccountDataBase';
import { GetUsersSchema } from './src/dtos/getUsers.dto';
import { ZodError } from 'zod';
import { BaseError } from './src/errors/BaseError';
import TransactionsBusiness from './src/business/TransactionsBusiness';
import { TransactionsDataBase } from './src/database/TransactionsDataBase';
import { IdGenerator } from './src/services/IdGenerator';

const transactionsBusiness = new TransactionsBusiness(
    new TransactionsDataBase(),
    new TokenManager(),
    new AccountBusiness(
        new AccountDataBase,
        new TokenManager()
    ),
    new IdGenerator(),
    new AccountDataBase()
  );
  

  const createTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const input = GetUsersSchema.parse({
        token: req.headers.authorization
      });
      const { accountDebited, accountCredited, value} = req.body;

      const output = await transactionsBusiness.createTransaction(input, accountDebited, accountCredited, value);
      console.log(output)
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
  

export default createTransaction;
