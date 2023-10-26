import { UserDatabase } from '../database/UserDataBase';
import { SignupInputDTO, SignupOutputDTO } from '../dtos/signup.dto';
import { ConflictError } from '../errors/ConflictError';
import UserModel, { USER_ROLES, UserDB } from '../models/UserModel';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export default class SignupBusiness {
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
}
