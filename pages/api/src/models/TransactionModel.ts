export interface TransactionDB {
  id: string;
  debitedAccountId: string;
  creditedAccountId: string;
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
      debitedAccountId: this.debitedAccountId,
      creditedAccountId: this.creditedAccountId,
      value: this.value,
      created_at: this.createdAt,
    };
  }

  public static fromDBModel(dbModel: TransactionDB): Transaction {
    return new Transaction(
      dbModel.id,
      dbModel.debitedAccountId,
      dbModel.creditedAccountId,
      dbModel.value,
      dbModel.created_at
    );
  }
}
