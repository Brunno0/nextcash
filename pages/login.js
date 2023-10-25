import LoginCard from "../components/loginCard/loginCard";
import styles from '../styles/Login.module.css';
import Input from "../components/input/input";
import Button from "../components/button/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={"Log into your account"}>
        <form className={styles.form}>
          <Input type="email" placeholder="enter your email" />
          <Input type="password" placeholder="enter your password" />
          <Button>Submit</Button>
          <Link href="/signup">
          {"Don't have an account? Sign up :)"}
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
