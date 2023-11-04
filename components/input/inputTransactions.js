import styles from './input.module.css'


export default function InputTransactions ({children,...props}) {

    return (
    <input className={styles.inputTransactions} {...props}>
        {children}
    </input>    
    )
}
