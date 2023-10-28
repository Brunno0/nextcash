import { UserDatabase } from '../database/UserDataBase';
import {  GetUsersInputDTO, GetUsersOutputDTO } from '../dtos/getUsers.dto';
import { LoginUserInputDTO, LoginUserOutputDTO } from '../dtos/login.dto';
import { SignupInputDTO, SignupOutputDTO } from '../dtos/signup.dto';
import { BadRequestError } from '../errors/BadRequestError';
import { ConflictError } from '../errors/ConflictError';
import User, { TokenPayload } from '../models/UserModel';
import UserModel, { USER_ROLES, UserDB } from '../models/UserModel';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';
import { TokenManager } from '../services/TokenManager';
import  {AccountDataBase} from '../database/AccountDataBase'
import { AccountOutputDTO } from '../dtos/account.dto';

export default class UserBusiness {
  constructor(
    private userDataBase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager : HashManager,
    private tokenManager: TokenManager,
    private accountDataBase: AccountDataBase
    ) {}

  public signup = async (
    input: SignupInputDTO
    ):Promise<SignupOutputDTO> => {

    const { name, email, password } = input;

    const emailExist = await this.userDataBase.findUserByEmail(email)
      if(emailExist){
        throw new ConflictError("Email já cadastrado")
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

      const payload: TokenPayload = {
        id:user.getId(),
        name: user.getName(),
        role:user.getRole()
      }

      const token = this.tokenManager.createToken(payload)

      const output:SignupOutputDTO = {
        token
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
public login = async( 
    input:LoginUserInputDTO
    ):Promise<LoginUserOutputDTO> => {
      const {email, password} = input
      const userDB = await this.userDataBase.findUserByEmail(email)

      if(!userDB){
          throw new BadRequestError("E-mail e/ou senha inválido(s)")
      }

      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role,
        userDB.created_at
    )
    const hashedPassword = userDB.password
    
    const isPasswordCorrect = 
    await this.hashManager.compare(
              password, hashedPassword)
    
    if(!isPasswordCorrect){
        throw new BadRequestError("Password incorreto")
    }

    const payload: TokenPayload = {
        id: user.getId(),
        name: user.getName(),
        role: user.getRole()
      }
  
    const token = this.tokenManager.createToken(payload)
    const output : LoginUserOutputDTO= {
      token
      }  
    return output
}
public createAccount = async (
  input: SignupInputDTO):Promise<void>   => {

    const {email} = input
    const userDB = await this.userDataBase.findUserByEmail(email)
    if (!userDB) {
      throw new Error('Usuário não cadastrado, consulte servidor')
    }    
    const accountData :AccountOutputDTO = {
      id : userDB.id,
      balance : 20
    }
   await this.accountDataBase.createAccount(accountData)
}
}
