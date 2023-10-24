// src/business/SignupBusiness.ts


import SignupDatabase from '../database/signupDatabase';
import UserModel from '../models/UserModel';

export default class SignupBusiness {
  constructor(private signupDatabase: SignupDatabase) {}

  async signup(nome: string, email: string, senha: string): Promise<UserModel> {
    // Lógica de negócios para criar um usuário
    const user = new UserModel(nome, email, senha);
    return this.signupDatabase.salvarUsuario(user);
  }
}
