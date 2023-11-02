
import { BadRequestError } from '../errors/BadRequestError';

import { TokenManager } from '../services/TokenManager';
import  {AccountDataBase} from '../database/AccountDataBase'
import { AccountDto, GetAccountInputDTO, GetAccountOutputDTO } from '../dtos/account.dto';
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { GetTransactionsByIdInputDTO, GetTransactionsInputDTO, GetTransactionsOutputDTO, TransactionsDTO } from '../dtos/transactions.dto';
import { TransactionsDataBase } from '../database/TransactionsDataBase';
import { getTransactionsById } from '../../api-client/api-client';


export default class TransactionsBusiness {
  constructor(
    private transactionsDataBase: TransactionsDataBase,
    private tokenManager: TokenManager
    ) {}

public createTransaction = async (id:string):Promise<void>   => {

 }

public getTransactions = async (
  input: GetTransactionsInputDTO
  ):Promise<GetTransactionsOutputDTO> => {

  const { token } = input;

  const tokenPayload = this.tokenManager.getPayload(token);
  if (!tokenPayload) {
    throw new UnauthorizedError("Acesso negado");
  }

  const transactionsDB: TransactionsDTO[] | undefined = await this.transactionsDataBase.getTransactionsById(tokenPayload.id);

  if (!transactionsDB){
    throw new BadRequestError()
  }
   
  const output: GetTransactionsOutputDTO = {
      transactions: transactionsDB,
  };

  return output;
}




public getTransactionsById = async (
    input: GetTransactionsByIdInputDTO,
    ):Promise<GetTransactionsOutputDTO | string> => {
  
    const { token, accountId } = input;
  
    const tokenPayload = this.tokenManager.getPayload(token);
    if (!tokenPayload) {
      throw new UnauthorizedError("Acesso negado");
    }
  
    const transactionsDB: TransactionsDTO[] | undefined = await this.transactionsDataBase.getTransactionsById(accountId);
  
    if (!transactionsDB){
      return ("Nenhuma transação cadastrada")
    }
     
    const output: GetTransactionsOutputDTO = {
        transactions: transactionsDB,
    };
  
    return output;
  }
  }






