
import { UserDB } from "../models/UserModel";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users"

  public saveUser = async (
    userDB: UserDB
  ): Promise<void> => {
    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .insert(userDB)
  }

  public findUserByEmail = async (
    email: string
  ): Promise<UserDB | undefined> => {
    const [userDB] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ email })

    return userDB as UserDB | undefined
  }

  public getUsers =async():Promise<UserDB[]> => {
    const users = 
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).select() 
    return users 
  }

  public getUserById =async(
    id:string
    ):Promise<UserDB| undefined> => {
    const [user] = 
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).select().where({id}) 
    return user as UserDB | undefined
  }

  }
