import styles from '../styles/Login.module.css'
import Button from '../components/button/button'
import Input from '../components/input/input'
import LoginCard from '../components/loginCard/loginCard'

export default function Cadastro() {

    return(<div className={styles.background}> 
       <LoginCard title={"Cadastro"}>
       <form className={styles.form}>
                <Input type="text" placeholder="seu nome completo" />
                <Input type="email" placeholder="digite seu email" />
                <Input type="password" placeholder="digite sua senha" />
                <Button >Enviar </Button>
            </form>
       </LoginCard>
        </div>)
}