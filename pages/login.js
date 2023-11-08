import LoginCard from "../components/loginCard/loginCard";
import styles from '../styles/Login.module.css';
import Input from "../components/input/input";
import Button from "../components/button/button";
import Link from "next/link";
import useForm from "../hooks/useForm";
import Neon from "../components/boxNeon/neon";

import { login } from "./api/api-client/api-client";
import { useRouter } from 'next/navigation';
import { GlobalContext } from "../context/GlobalContext";
import { 
  useContext,
  useEffect,
  useState 
  } from "react";
  
export default function LoginPage() {
  const [neonVisible, setNeonVisible] = useState(true);
  const [showInputs, setShowInputs] = useState(false); 
  const [showTitle, setShowTitle] = useState(false);
  const [showBackground, setShowBackground] = useState(false); 
  
  const router = useRouter();
  const context = useContext(GlobalContext);

  const {
    resetState,
  } = context;

  const { form, onChange, cleanFields } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      if (response) {
        localStorage.setItem('token', response);
        resetState();
        cleanFields();
        router.replace('/home');
      } else {
        console.log(response);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const neonTimeout = setTimeout(() => {
      setNeonVisible(false);
    }, 2200); // Neon visível por 2 segundos

    const inputsTimeout = setTimeout(() => {
      setShowTitle(true);
      setShowInputs(true);
      setShowBackground(true)// Mostrar o background após 2 segundos
    }, 2200); // Mostrar o título após 2 segundos

 
    return () => {
      clearTimeout(neonTimeout);
      clearTimeout(inputsTimeout);
 
    };
  }, []);

  return (
    <div className={`${styles.background} ${showBackground ? styles['background-image'] : ''}`}>
    <div className={styles.container}>
      {neonVisible && <Neon />}
      {showTitle && (
        <>
          <Neon />
          {showInputs && (
            <LoginCard title={'Entre na sua conta nxc'}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={form.email}
                  onChange={onChange}
                />
                <Input
                  type='password'
                  placeholder='Enter your password'
                  name='password'
                  onChange={onChange}
                />
                <Button type='submit'>Login</Button>
                <Link href='/signup'>{"Não tem conta? Cadastre-se :)"}</Link>
              </form>
              </LoginCard>
            )}
        
          </>
        )}
        
      </div>
    </div>
  );
}
