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
  account : AccountDto
}
