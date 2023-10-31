import { AccountDto, GetAccountInputDTO, GetAccountOutputDTO } from "../dtos/account.dto";
import  Account from "../models/AccountModel";
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
  
}
