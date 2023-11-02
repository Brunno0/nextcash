import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome';
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import Transactions from '../components/transactions/Transactions';
import { useContext, useEffect, useState } from 'react';
import { getAccountById, getTransactionsById, getUserById } from './api/api-client/api-client';
import { FaTruckLoading } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalContext';

export default function Home() {
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
        <CardHome/>
        <Transactions/>
      </div>
    </>:(<FaTruckLoading/>)}
     
    </>
  );
}
