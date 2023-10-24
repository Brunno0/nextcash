// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';

import SignupBusiness from './src/business/signupBusiness';
import SignupController from './src/controller/signupController';
import SignupDatabase from './src/database/signupDatabase';

const signupController = new SignupController(
    new SignupBusiness(
        new SignupDatabase()
    ));

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { nome, email, senha } = req.body;

      const user = await signupController.cadastrarUsuario(nome, email, senha);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar a solicitação', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};

