import LoginCard from "../components/loginCard/loginCard";
import styles from '../styles/Login.module.css';
import Input from "../components/input/input";
import Button from "../components/button/button";
import Link from "next/link";
import useForm from "../hooks/useForm";
import { login } from "./api/api-client/api-client";
import { BsBank } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import Neon from "../components/boxNeon/neon";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function LoginPage() {
  const router = useRouter();
  const context = useContext(GlobalContext)
  const {
    resetState,
  } = context

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

        // Chame resetState aqui para redefinir o estado
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

  return (
    <div className={styles.background}>
     
      <div className={styles.container}>
        <Neon/>
            <LoginCard title={"Log into your account"}>
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <Button type="submit">Login</Button>
            <Link href="/signup">
              {"Don't have an account? Sign up :)"}
            </Link>
          </form>
        </LoginCard>
      </div>
    </div>
  );
}
