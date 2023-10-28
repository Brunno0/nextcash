import styles from '../styles/Login.module.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from '../components/loginCard/loginCard';
import { useForm } from '../hooks/useForm'
import { signup } from './api/api-client/api-client';

export default function Signup() {
  const { form, onChange, cleanFields } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await signup(form); // Use o objeto form diretamente
      console.log(token);
      cleanFields(); // Limpe os campos do formulário
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title={"Sign Up"}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="your full name"
            name="name"
            value={form.name}
            onChange={onChange}
          />

          <Input
            type="email"
            placeholder="enter your email"
            name="email"
            value={form.email}
            onChange={onChange} 
          />

          <Input
            type="password"
            placeholder="enter your password"
            name="password"
            value={form.password}
            onChange={onChange} 
          />
          <Button type="submit">Submit</Button>
        </form>
      </LoginCard>
    </div>
  );
}
