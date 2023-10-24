// src/database/SignupDatabase.ts
import UserModel from '../models/UserModel';

export default class SignupDatabase {
  async salvarUsuario(user: UserModel): Promise<UserModel> {
    // Lógica para salvar o usuário em um banco de dados (simulado)
    // Retornar o usuário salvo
    console.log({message:"Chegamos no banco"})
    return user;
  }
}
