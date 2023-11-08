import Link from 'next/link';
import styles from './navbar.module.css';
import { FaExchangeAlt, FaRegBell, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { LuLogOut } from 'react-icons/lu';
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
   
    const router = useRouter()
    const context = useContext(GlobalContext)
    const {user} = context

    const logout = () =>{
        localStorage.removeItem('token')
        router.push('/login')        
    }
    const userName = user && user.name ? user.name.split(' ') : [''];
    return (
        <nav className={styles.navbar}>
            <div className={styles.containerNav}>
                <div className={styles.userIcon}>
                    <div className={styles.iconUser}>
                        <FaUserAlt size={20} />
                    </div >
                    <span className={styles.userName} >Olá, {
                    userName[0]}</span>
                </div>
                <div className={styles.navList}>

                <Link href="/home">
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Settings"><BiHomeAlt2 size={'20px'} /></span>
                        </span>
                    </Link>
                    <Link href="/transactionsPage">
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Transactions"></span> <FaExchangeAlt size={'20px'} />
                        </span>
                    </Link>
                  
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Settings"><FaRegBell size={'20px'} /></span>
                        </span>
                 
                    
                    
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Logout">
                                <div className={styles.exit} onClick={()=>{logout()}}>
                                <div><LuLogOut size={'20px'} /> </div>
                                 </div>
                            </span>
                        </span>
                        

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
