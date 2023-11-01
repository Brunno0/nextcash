import z from 'zod'
import User from '../models/UserModel'

export interface GetUsersInputDTO {
  token: string,
}

export interface GetUsersOutputDTO {
  users: User[] | User
}

export interface GetUserByIdOutputDTO {
  user:User
}


export const GetUsersSchema = z.object({
  token: z.string().min(2),
}).transform(data => data as GetUsersInputDTO)
