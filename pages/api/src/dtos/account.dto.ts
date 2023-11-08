import Account from "../models/AccountModel"

export interface GetAccountInputDTO {
  token: string
}
export interface AccountDto {
  id:string,
  balance:number,
  userId:string
}

export interface GetAccountOutputDTO {
  account :AccountDbDTO
}

export interface GetAccountsOutputDTO {
  accounts : AccountDbDTO[]
}

export interface AccountDbDTO {
  id:string,
  balance:number,
  user_id:string
}

