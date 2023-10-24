import { NextApiRequest, NextApiResponse } from 'next';

export async function cadastrarUsuario(dados: any) {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Outros métodos de API podem ser definidos aqui, da mesma forma
