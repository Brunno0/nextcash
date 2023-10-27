import { UserDatabase } from '../database/UserDataBase';
import {  GetUsersInputDTO, GetUsersOutputDTO } from '../dtos/getUsers.dto';
import { SignupInputDTO, SignupOutputDTO } from '../dtos/signup.dto';
import { ConflictError } from '../errors/ConflictError';
import User from '../models/UserModel';
import UserModel, { USER_ROLES, UserDB } from '../models/UserModel';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export default class UserBusiness {
  constructor(
    private userDataBase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager : HashManager
    ) {}

  public signup = async (
    input: SignupInputDTO
    ):Promise<SignupOutputDTO> => {

    const { name, email, password } = input;

    const emailExist = await this.userDataBase.findUserByEmail(email)
      if(emailExist){
        throw new ConflictError()
      }
    const id = this.idGenerator.generate()
    const hashedPass = await this.hashManager.hash(password)

    const user = new UserModel(
      id,
      name, 
      email, 
      hashedPass,
      USER_ROLES.NORMAL,
      new Date().toISOString()
      );
    
      const userDB = user.toDBModel()
     
      await this.userDataBase.saveUser(userDB);
      const output:SignupOutputDTO = {
        token: "token-mock"
      }
      

      return output
     
  }

  public getUsers = async (
    input: GetUsersInputDTO
    ):Promise<GetUsersOutputDTO> => {

    const { token } = input;

    const usersDB: UserDB[] = await this.userDataBase.getUsers();

    const users: User[] = 
    usersDB.map(
      (userDB) => new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role,
        userDB.created_at        
      ) );

    const output: GetUsersOutputDTO = {
        users,
    };

    return output;
}
 
  }

