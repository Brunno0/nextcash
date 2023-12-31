import { TransactionsDTO } from "../dtos/transactions.dto";
import Transaction from "../models/TransactionModel";
import { BaseDatabase } from "./BaseDataBase";

export class TransactionsDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "transactions"

 
  public getTransactionsById = async (accountId: string): Promise<TransactionsDTO[] | undefined> => {
  
    const transactions = await BaseDatabase.connection
      .select()
      .from(TransactionsDataBase.TABLE_ACCOUNTS)
      .where('debited_account_id', accountId)
      .orWhere('credited_account_id', accountId);
   
    return transactions as TransactionsDTO[] | undefined;
  }

  public createTransaction = async (transaction:Transaction):Promise<void>=>{
    transaction.toDBModel()
    await BaseDatabase.connection.insert(transaction.toDBModel()).into(TransactionsDataBase.TABLE_ACCOUNTS)
  }
  
  
}
