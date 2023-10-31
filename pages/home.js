import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome'; // Importe o componente CardHome
//import Footer from '../components/Footer'; // Supondo que você tenha um componente Footer
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import Transactions from '../components/transitions/Transactions';

export default function Home() {
  useProtectPage();

  const dataMock = {
    account: "nx: 50423-1",
    name: "Astrovengo Malabares",
    balance: 20,
  };

  return (
    <>
      <Navbar user={dataMock} />
      <div className={styles.background}>
        <CardHome user={dataMock} />
        <Transactions user={dataMock} />
      </div>
    </>
  );
}
