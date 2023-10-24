import styles from '../styles/Login.module.css'
import Button from '../components/button/button'
import Input from '../components/input/input'
import LoginCard from '../components/loginCard/loginCard'
import { useState } from 'react';
import { cadastrarUsuario } from './api/api-client/api-client'; 

export default function Cadastro() {
   
    const [dadosDoForm, setDadosDoForm] = useState({
        nome: '',
        email: '',
        senha: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosDoForm({ ...dadosDoForm, [name]: value });
      };
    
      const enviar = async (e) => {
        e.preventDefault();

        try {
            // Chame a função cadastrarUsuario do seu cliente API
            const resposta = await cadastrarUsuario(dadosDoForm);

            console.log(resposta);
            // Faça o que desejar com a resposta, como redirecionar o usuário ou exibir uma mensagem de sucesso.
        } catch (error) {
            console.error(error);
            // Trate erros, se necessário.
        }
    }



    return(
    <div className={styles.background}> 
       <LoginCard title={"Cadastro"}>
       <form className={styles.form} onSubmit={enviar}>
                <Input
                 type="text" 
                 placeholder="seu nome completo"
                 name="nome"
                 value={dadosDoForm.nome}
                 onChange={handleChange} />

                <Input 
                type="email" 
                placeholder="digite seu email"
                name="email"
                value={dadosDoForm.email}
                onChange={handleChange} /> 


                <Input 
                type="password"
                placeholder="digite sua senha"
                name="senha"
                value={dadosDoForm.senha}
                onChange={handleChange}/>
                <Button type="submit" >Enviar </Button>
            </form>
       </LoginCard>
        </div>)
}