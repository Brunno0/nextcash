import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome';
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import UsersList from '../components/usersList/UsersList'
import { useContext, useEffect, useState } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalContext';
import CardTransactions from '../components/cardTransactions/cardTransactions';

export default function TransactionsPage() {
  useProtectPage();

  const context = useContext(GlobalContext)
  const {
    account,
    user,
  } = context


  return (
    <>
     {(user && account)?  <>
      <Navbar/>
      <div className={styles.background}>
        <CardTransactions/>
        <UsersList/>
      </div>
    </>:(<FaTruckLoading/>)}
     
    </>
  );
}
