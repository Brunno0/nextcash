
import { BadRequestError } from '../errors/BadRequestError';

import { TokenManager } from '../services/TokenManager';
import  {AccountDataBase} from '../database/AccountDataBase'
import { AccountDto, GetAccountInputDTO, GetAccountOutputDTO, GetAccountsOutputDTO } from '../dtos/account.dto';
import { UnauthorizedError } from '../errors/UnauthorizedError';


export default class AccountBusiness {
  constructor(
    private accountDataBase: AccountDataBase,
    private tokenManager: TokenManager
    ) {}

public createAccount = async (id:string):Promise<void>   => {

  const split = (id.split('-'))
  const accountId = 'nxc-'+ split[0]

    const accountData :AccountDto = {
      id : accountId,
      balance : 20,
      userId: id
    }
   await this.accountDataBase.createAccount(accountData)
}

public getAccountById = async (
  input: GetAccountInputDTO, accountId:string
  ):Promise<GetAccountOutputDTO> => {

  const { token } = input;

  const tokenPayload = this.tokenManager.getPayload(token);
  if (!tokenPayload) {
    throw new UnauthorizedError("Acesso negado");
  }
  
  const accountDB: AccountDto | undefined = await this.accountDataBase.getAccountById(accountId);
  if (!accountDB){
    throw new BadRequestError()
  }
   
  const output: GetAccountOutputDTO = {
      account: accountDB,
  };

  return output;
  }


public getAccounts = async (
  input: GetAccountInputDTO
  ):Promise<GetAccountsOutputDTO> => {

  const { token } = input;

  const tokenPayload = this.tokenManager.getPayload(token);
  if (!tokenPayload) {
    throw new UnauthorizedError("Acesso negado");
  }

  const accountsDB: AccountDto[] | undefined = await this.accountDataBase.getAccounts();

  if (!accountsDB){
    throw new BadRequestError()
  }
   
  const output: GetAccountsOutputDTO = {
      accounts: accountsDB,
  };

  return output;
}



}