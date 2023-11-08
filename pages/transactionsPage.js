import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome';
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import UsersList from '../components/usersList/UsersList'
import { useContext, useEffect, useState } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalContext';
import CardTransactions from '../components/cardTransactions/cardTransactions';
import MySpinner from '../components/spinner/MySpinner';
export default function TransactionsPage() {
  useProtectPage();
  
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(GlobalContext)
  const {
    account,
    user,
  } = context

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
     {isLoading ?  <>
      <Navbar/>
      < div className={styles.loading} >
        <MySpinner /> 
        </div>
      <div className={styles.background}>
      </div>
    </>:(
      <>
      <Navbar/>
    
      <div className={styles.background}>
        <CardTransactions/>
        <UsersList accountId ={account.id}/>
      </div></>
    
    
    )}
     
    </>
  );
}
