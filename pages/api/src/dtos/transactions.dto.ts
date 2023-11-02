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
}



export interface GetTransactionsOutputDTO {
  transactions : TransactionsDTO[] | TransactionsDTO | undefined
}

