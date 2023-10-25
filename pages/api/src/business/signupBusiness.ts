import SignupDatabase from '../database/signupDatabase';
import { SignupInputDTO } from '../dtos/signup.dto';
import UserModel, { USER_ROLES } from '../models/UserModel';

export default class SignupBusiness {
  constructor(private signupDatabase: SignupDatabase) {}

  async signup(input: SignupInputDTO): Promise<UserModel> {
    // Business logic to create a user
    const { name, email, password } = input;
    const id = Date.now().toString()
    const createdAt = Date.now().toString()
    const role = USER_ROLES.NORMAL

    const user = new UserModel(id,name, email, password,role, createdAt);
    return this.signupDatabase.saveUser(user);
  }
}
