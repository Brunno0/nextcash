import styles from './input.module.css'


export default function InputValue ({children,...props}) {

    return (
    <input className={styles.inputValue} {...props}>
        {children}
    </input>    
    )
}
