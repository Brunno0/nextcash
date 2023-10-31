import Navbar from '../components/nav/Navbar';
import CardHome from '../components/cardHome/CardHome'; 
import styles from '../styles/Home.module.css';
import { useProtectPage } from '../hooks/useProtectPage';
import Transactions from '../components/transactions/Transactions';
import { useEffect, useState } from 'react';
import { getAccountById, getUserById } from './api/api-client/api-client';
import { FaTruckLoading } from 'react-icons/fa';

export default function Home() {
  useProtectPage();

 const [account, setAccount] = useState({})
 const [user, setUser] = useState({})

 useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        console.log("tem token")
        const accountApiResponse = await getAccountById(token);
        setAccount( accountApiResponse.account )
      
        
        const userApiResponse = await getUserById(token);
        setUser(userApiResponse.user)

      } catch (error) {
        console.error(error);
      }
    }
  };

  fetchData();
}, []);

  return (
    <>
     {(user && account)?  <>
      <Navbar user={user} account={account} />
      <div className={styles.background}>
        <CardHome account={account}/>
        <Transactions user={user}  account={account}/>
      </div>
    </>:(<FaTruckLoading/>)}
     
    </>
  );
}
