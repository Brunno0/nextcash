import { AccountDbDTO, AccountDto, GetAccountInputDTO, GetAccountOutputDTO } from "../dtos/account.dto";
import { BaseDatabase } from "./BaseDataBase";

export class AccountDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts"

  public createAccount = async (
      account :AccountDbDTO
      ):Promise<void> => {

    await BaseDatabase
          .connection(AccountDataBase.TABLE_ACCOUNTS).
          insert(account)
  }

  public getAccountById = async (id: string): Promise<AccountDbDTO | undefined> => {
    const account = await BaseDatabase.connection
      .select('accounts.*')
      .from(AccountDataBase.TABLE_ACCOUNTS)
      .innerJoin('users', 'accounts.user_id', 'users.id')
      .where('users.id', id)
      .first();
    return account as AccountDbDTO | undefined;
  }

  public getAccounts = async (): Promise<AccountDbDTO[] | undefined> => {
    const accounts = await BaseDatabase.connection
      .select('*')
      .from(AccountDataBase.TABLE_ACCOUNTS);
  
    return accounts as AccountDbDTO[] | undefined;
  }

  public getNameBy = async (): Promise<AccountDto[] | undefined> => {
    const accounts = await BaseDatabase.connection
      .select('accounts.*', 'users.name as userName') 
      .from(AccountDataBase.TABLE_ACCOUNTS)
      .leftJoin('users', 'accounts.user_id', 'users.id'); 
  
    return accounts as AccountDto[] | undefined;
  }
  
  public updateBalance = async (idAccount: string, value: number): Promise<void> => {
       await BaseDatabase.connection(AccountDataBase.TABLE_ACCOUNTS)
      .where({ id: idAccount })
      .update({ balance: value });
  }
  
}
