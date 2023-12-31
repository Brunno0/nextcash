import styles from '../styles/Login.module.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from '../components/loginCard/loginCard';
import { useForm } from '../hooks/useForm'
import { signup } from './api/api-client/api-client';
import { useRouter } from 'next/navigation'
import Neon from '../components/boxNeon/neon';

export default function Signup() {
  const router = useRouter()
  
  const { form, onChange, cleanFields } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(form); 
      if (response.token){
      localStorage.setItem('token',response.token)
      cleanFields(); 
      alert('Cadastro realizado com sucesso')
      router.push('/home')
      }else{
        alert(response)
      } 
    } catch (error) {
      alert(error)
    }
  }

  return (

    <div className={styles.background}>
     
    <div className={styles.container}>
      <Neon/>
      
      <LoginCard title={"Cadastro"}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome completo"
            name="name"
            value={form.name}
            onChange={onChange}
          />

          <Input
            type="email"
            placeholder="digite seu email"
            name="email"
            value={form.email}
            onChange={onChange} 
          />

          <Input
            type="password"
            placeholder="senha"
            name="password"
            value={form.password}
            onChange={onChange} 
          />
          <Button type="submit">Enviar</Button>
        </form>
      </LoginCard>
    </div>
    </div>
  );
}
