// pages/api/signup/signupController.ts
import  SignupBusiness from '../business/signupBusiness';

export default class SignupController {
  constructor(private signupBusiness: SignupBusiness) {}

  async cadastrarUsuario(nome: string, email: string, senha: string) {
    // Lógica para cadastrar o usuário
    const user = await this.signupBusiness.signup(nome, email, senha);
    return user;
  }
}
