import styles from './input.module.css'


export default function Input ({children,...props}) {

    return (
    <input className={styles.input} {...props}>
        {children}
    </input>    
    )
}
