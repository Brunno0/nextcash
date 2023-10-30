import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            🏠 Página Inicial
          </Link>
        </li>
        <li>
          <Link href="/transactions">
            💸 Transações
          </Link>
        </li>
        <li>
          <Link href="/settings">
            ⚙️ Configurações
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
