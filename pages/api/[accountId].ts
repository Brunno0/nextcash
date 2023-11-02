//[accountId].ts


import { NextApiRequest, NextApiResponse } from 'next';
import { TokenManager } from './src/services/TokenManager';
import { ZodError } from 'zod';
import { BaseError } from './src/errors/BaseError';
import TransactionsBusiness from './src/business/TransactionsBusiness';
import { TransactionsDataBase } from './src/database/TransactionsDataBase';
import { GetUsersSchema } from './src/dtos/getUsers.dto';
import { GetTransactionsByIdInputDTO } from './src/dtos/transactions.dto';
import { UnauthorizedError } from './src/errors/UnauthorizedError';

const transactionsBusiness = new TransactionsBusiness(
  new TransactionsDataBase(),
  new TokenManager()
);

const getTransactionsById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accountId = req.query.accountId as string | undefined;

    if (typeof accountId === 'string') {
      const input: GetTransactionsByIdInputDTO = {
        token: req.headers.authorization as string,
        accountId: accountId
      };
     
      const output = await transactionsBusiness.getTransactionsById(input);
      res.status(200).json(output); 
    } else {
      throw new UnauthorizedError()
    }
   
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

export default getTransactionsById;
