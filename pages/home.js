import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome';
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import Transactions from '../components/transactions/Transactions';
import { AiOutlineLoading } from 'react-icons/ai';

import { GlobalContext } from '../context/GlobalContext';
import MySpinner from '../components/spinner/MySpinner'; // Renamed the imported component

export default function Home() {
  useProtectPage();

  const context = useContext(GlobalContext);
  const { fetchData } = context;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 1200); 
  }, []);

  return (
    <>
      {isLoading ? (
        <><Navbar/>
        < div className={styles.loading} >
        <MySpinner /> 
        </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className={styles.background}>
            <CardHome />
            <Transactions />
          </div>
        </>
      )}
    </>
  );
}
