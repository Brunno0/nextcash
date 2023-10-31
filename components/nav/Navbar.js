import Link from 'next/link';
import styles from './navbar.module.css';
import { FaExchangeAlt, FaRegBell, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = ({ user }) => {
    const userName = user && user.name ? user.name.split(' ') : [''];
    const router = useRouter()

    const logout = () =>{
        localStorage.removeItem('token')
        router.push('/login')        
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.containerNav}>
                <div className={styles.userIcon}>
                    <div className={styles.iconUser}>
                        <FaUserAlt size={20} />
                    </div >
                    <span className={styles.userName} >Olá, {userName[0]}</span>
                </div>
                <div className={styles.navList}>
                    <Link href="/transactions">
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Transactions"></span> <FaExchangeAlt size={'20px'} />
                        </span>
                    </Link>

                    <Link href="/settings">
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Settings"><FaRegBell size={'20px'} /></span>
                        </span>
                    </Link>
                    
                        <span className={styles.navLink}>
                            <span className={styles.icon} role="img" aria-label="Logout">
                                <button onClick={()=>{logout()}}>
                                <FaSignOutAlt /> Sair
                            </button></span>
                        </span>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
