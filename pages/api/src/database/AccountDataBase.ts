import { AccountDto, GetAccountInputDTO, GetAccountOutputDTO } from "../dtos/account.dto";
import { BaseDatabase } from "./BaseDataBase";

export class AccountDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts"

  public createAccount = async (
      account :AccountDto
      ):Promise<void> => {

    await BaseDatabase
          .connection(AccountDataBase.TABLE_ACCOUNTS).
          insert(account)
  }

  public getAccountById = async (id: string): Promise<AccountDto | undefined> => {
    const account = await BaseDatabase.connection
      .select('accounts.*')
      .from(AccountDataBase.TABLE_ACCOUNTS)
      .innerJoin('users', 'accounts.userId', 'users.id')
      .where('users.id', id)
      .first();
  
    return account as AccountDto | undefined;
  }

  public getAccounts = async (): Promise<AccountDto[] | undefined> => {
    const accounts = await BaseDatabase.connection
      .select('*')
      .from(AccountDataBase.TABLE_ACCOUNTS);
  
    return accounts as AccountDto[] | undefined;
  }

  public getNameBy = async (): Promise<AccountDto[] | undefined> => {
    const accounts = await BaseDatabase.connection
      .select('accounts.*', 'users.name as userName') 
      .from(AccountDataBase.TABLE_ACCOUNTS)
      .leftJoin('users', 'accounts.userId', 'users.id'); 
  
    return accounts as AccountDto[] | undefined;
  }
  
  
}
