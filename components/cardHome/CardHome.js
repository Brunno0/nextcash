// CardHome.js
import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import styles from './CardHome.module.css';

const CardHome = ({ user }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const userName = user.name.split(' ')
  console.log(userName[0])
  const toggleBalance = (balanceVisible) => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className={styles.cardcontainer}>
      <p className={styles.logo}>
        <strong>Conta: {user.account} </strong>
        </p>
      <div className={styles.card}>
               <div className={styles.box}>
          💰 Saldo R$: {balanceVisible ? +user.balance : (
            <span onClick={()=>toggleBalance(balanceVisible)} style={{ cursor: 'pointer' }}>
              *** <FaEyeSlash size={'20px'} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardHome;
