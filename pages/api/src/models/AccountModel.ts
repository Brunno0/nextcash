  
  export interface AccountModel {
    id: string;
    balance: number;
  }
  
  export default class Account {
    constructor(private id: string, private balance: number) {}
  
    public getId(): string {
      return this.id;
    }
  
    public setId(value: string): void {
      this.id = value;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  
    public setBalance(value: number): void {
      this.balance = value;
    }
  
  
    public toBusinessModel(): AccountModel {
      return {
        id: this.id,
        balance: this.balance,
      };
    }
  }
  