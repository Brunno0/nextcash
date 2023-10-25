import SignupDatabase from '../database/signupDatabase';
import { SignupInputDTO } from '../dtos/signup.dto';
import UserModel, { USER_ROLES, UserDB } from '../models/UserModel';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export default class SignupBusiness {
  constructor(
    private signupDatabase: SignupDatabase,
    private idGenerator: IdGenerator,
    private hashManager : HashManager
    ) {}

  public signup = async (
    input: SignupInputDTO
    ):Promise<UserModel> => {

    const { name, email, password } = input;


    const id = this.idGenerator.generate()
    const createdAt = new Date().toISOString()
    const hashedPass = await this.hashManager.hash(password)
    console.log(hashedPass)

    const user = new UserModel(
      id,
      name, 
      email, 
      hashedPass,
      USER_ROLES.NORMAL,
      createdAt
      );
    
      const userDB = user.toDBModel()
     
      const output = await this.signupDatabase.saveUser(userDB);
           
      return output
     
  }
}
