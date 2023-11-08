
import { BadRequestError } from '../errors/BadRequestError';

import { TokenManager } from '../services/TokenManager';
import  {AccountDataBase} from '../database/AccountDataBase'
import { AccountDto, GetAccountInputDTO, GetAccountOutputDTO } from '../dtos/account.dto';
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { GetTransactionsByIdInputDTO, GetTransactionsInputDTO, GetTransactionsOutputDTO, TransactionOutputDTO, TransactionsDTO } from '../dtos/transactions.dto';
import { TransactionsDataBase } from '../database/TransactionsDataBase';
import { getTransactionsById } from '../../api-client/api-client';
import getAccountById from '../../getAccountById';
import AccountBusiness from './AccountBusiness';
import Transaction from '../models/TransactionModel';
import { IdGenerator } from '../services/IdGenerator';


export default class TransactionsBusiness {
  constructor(
    private transactionsDataBase: TransactionsDataBase,
    private tokenManager: TokenManager,
    private accountBusiness : AccountBusiness,
    private idGenerator: IdGenerator,
    private accountDataBase: AccountDataBase
    ) {}

public createTransaction = async (
      input:GetAccountInputDTO,
      accountDebited:string,
      accountCredited:string, 
      value:number
    ):Promise<TransactionOutputDTO>   => {

  const { token } = input;

  const tokenPayload = this.tokenManager.getPayload(token);
  if (!tokenPayload) {
    throw new UnauthorizedError("Acesso negado");
  }
 
  const accountToDebited = await this.accountBusiness.getAccountById(input,accountDebited)
  const accountToCredited = await this.accountBusiness.getAccountById(input,accountCredited)

    if(!accountToDebited || !accountToCredited){
      throw new Error("Erro interno, procure a administração do servidor")
    }

    if(accountToDebited.account.balance<value){
   
      const output : TransactionOutputDTO ={
        message:"Saldo insuficiente"
      }
      return output 
    }

    const id = this.idGenerator.generate()
    const transaction = new Transaction(
      id,
      accountToDebited.account.id,
      accountToCredited.account.id,
      value,
      new Date().toISOString()
    )
      await this.transactionsDataBase.createTransaction(transaction)

      const updatedBalanceDebited = accountToDebited.account.balance - value;
      await this.accountDataBase.updateBalance(accountToDebited.account.id, updatedBalanceDebited);
      const output : TransactionOutputDTO ={
        message:"Transação realizada com sucesso"
      }
      return (output)

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






