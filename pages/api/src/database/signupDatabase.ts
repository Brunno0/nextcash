import UserModel from '../models/UserModel';

export default class SignupDatabase {
  async saveUser(user: UserModel): Promise<UserModel> {
       console.log({ message: "Bateu no banco" });
    return user;
  }
}
