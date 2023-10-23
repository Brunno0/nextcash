
import LoginCard from "../components/loginCard/loginCard"
import styles from '../styles/Login.module.css'
import Input from "../components/input/input"
import Button from "../components/button/button"
import Link from "next/link"

export default function LoginPage() {

    return (<div className={styles.background}>

        <LoginCard title={"Entre na sua conta"}>
            <form className={styles.form}>
                <Input type="email" placeholder="digite seu email" />
                <Input type="password" placeholder="digite sua senha" />
                <Button >Enviar </Button>
                <Link href={"/cadastro"}>Não possue conta? cadastre-se :)</Link>
            </form>
        </LoginCard>

    </div>)
}