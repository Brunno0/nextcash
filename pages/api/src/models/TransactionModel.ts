export interface TransactionDB {
  id: string;
  debited_account_id: string;
  credited_account_id: string;
  value: number;
  created_at: string;
}

export default class Transaction {
  constructor(
    private id: string,
    private debitedAccountId: string,
    private creditedAccountId: string,
    private value: number,
    private createdAt: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getDebitedAccountId(): string {
    return this.debitedAccountId;
  }

  public getCreditedAccountId(): string {
    return this.creditedAccountId;
  }

  public getValue(): number {
    return this.value;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public toDBModel(): TransactionDB {
    return {
      id: this.id,
      debited_account_id: this.debitedAccountId,
      credited_account_id: this.creditedAccountId,
      value: this.value,
      created_at: this.createdAt,
    };
  }

  public static fromDBModel(dbModel: TransactionDB): Transaction {
    return new Transaction(
      dbModel.id,
      dbModel.debited_account_id,
      dbModel.credited_account_id,
      dbModel.value,
      dbModel.created_at
    );
  }
}
