import z from 'zod'

export interface SignupInputDTO {
  name: string,
  email: string,
  password: string
}

export interface SignupOutputDTO {
  token: string,
}


export const SignupSchema = z.object({
  name: z.string()
    .min(2, {
      message: "O nome deve conter pelo menos 2 caracteres",
    }),
  email: z.string()
    .email({
      message: "O e-mail deve seguir o padrão: 'usuario@email.com'",
    }),
  password: z.string()
    .min(4, {
      message: "A senha deve conter pelo menos 4 caracteres",
    }),
}).transform(data => data as SignupInputDTO);

