import z from 'zod'

export interface GetTransactionsInputDTO {
  token: string
}

export interface GetTransactionsByIdInputDTO {
    token: string,
    accountId:string
  }

export interface TransactionsDTO {
    id :string,
    debitedAccountId: string,
    creditedAccountId: string
    value:number
    createAt: string
}

export interface TransactionsDbDTO {
  id :string,
  debited_accountId: string,
  credited_accountId: string
  value:number
  createAt: string
}

export interface TransactionOutputDTO {
  message: string
}



export interface GetTransactionsOutputDTO {
  transactions : TransactionsDTO[] | TransactionsDTO | undefined
}

