import z from "zod";

export interface LoginUserInputDTO {
    email: string,
    password: string
}

export interface LoginUserOutputDTO{
    token: string,
}

export const LoginUserShema = z.object({  
    email: z.string({
        
        required_error: "Email é obritatório ",
        invalid_type_error: " 'Email' deve ser string"
    }).email({
        message: " Emil deve seguir o padrão: 'usuario@email.com'"}),
    
    password:z.string({
        required_error: "Digite password ",
        invalid_type_error: " Password deve ser uma string"
    })
})