import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';

export default function Home() {
  useProtectPage();

  const [balanceVisible, setBalanceVisible] = useState(false);

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
  }

  const dataMock = {
    account: "Conta do usuário",
    name: "Astrovengo Malabares",
    balance: 20,
  };

  return (
    <>  <Navbar />
    <div className={styles.background}>
       <div className={styles.cardcontainer}>
        <h1 className={styles.logo}>NextBank</h1>
        <div className={styles.card}>
          <p>{dataMock.name}</p>
          <div className={styles.box}>
           💰 Saldo R$: {balanceVisible ? + dataMock.balance : (
              <span onClick={toggleBalance} style={{ cursor: 'pointer' }}>
                <FaEyeSlash />
              </span>
            )}
         </div>
        </div>
      </div>
      </div>
  
    </>
  );
}
