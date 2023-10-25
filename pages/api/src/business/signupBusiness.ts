import SignupDatabase from '../database/signupDatabase';
import { SignupInputDTO } from '../dtos/signup.dto';
import UserModel, { USER_ROLES, UserDB } from '../models/UserModel';
import { IdGenerator } from '../services/IdGenerator';

export default class SignupBusiness {
  constructor(
    private signupDatabase: SignupDatabase,
    private idGenerator: IdGenerator
    ) {}

  public signup = async (
    input: SignupInputDTO
    ):Promise<UserModel> => {

    const { name, email, password } = input;

    const id = this.idGenerator.generate()
    const createdAt = new Date().toISOString()

    const user = new UserModel(
      id,
      name, 
      email, 
      password,
      USER_ROLES.NORMAL,
      createdAt
      );
    
      const userDB = user.toDBModel()
     
      const output = await this.signupDatabase.saveUser(userDB);
           
      return output
     
  }
}
