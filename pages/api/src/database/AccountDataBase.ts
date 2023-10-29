import { AccountOutputDTO } from "../dtos/account.dto";
import { UserDB } from "../models/UserModel";
import { BaseDatabase } from "./BaseDataBase";

export class AccountDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts"

  public createAccount = async (
      account :AccountOutputDTO
      ):Promise<void> => {

    await BaseDatabase
          .connection(AccountDataBase.TABLE_ACCOUNTS).
          insert(account)
  }
}
