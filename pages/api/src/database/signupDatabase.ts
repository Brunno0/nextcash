import UserModel, { UserDB } from '../models/UserModel';

export default class SignupDatabase {
  
  async saveUser(user: UserDB): Promise<UserModel> {
       console.log({ message: "Bateu no banco" });
       const userModel = new UserModel(
        user.id,
        user.name,
        user.email,
        user.password,
        user.role,
        user.created_at
       )
     
    return userModel;
  }
}
