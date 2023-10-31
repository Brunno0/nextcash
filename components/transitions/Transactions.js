// CardHome.js
import React, { useState } from 'react';
import { FaExchangeAlt, FaEyeSlash, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import styles from './transactions.module.css';
import TransitionsList from './TransactionsList';

const Transactions = ({ user }) => {

    const transitionsDataMock = [
        {
          id: '1',
          debitedAccountId: 'account1',
          creditedAccountId: 'account2',
          value: 100.0,
          created_at: '2023-10-28 10:00:00',
        },
        {
          id: '2',
          debitedAccountId: 'account2',
          creditedAccountId: 'account3',
          value: 50.0,
          created_at: '2023-10-28 11:30:00',
        },
        {
          id: '3',
          debitedAccountId: 'account1',
          creditedAccountId: 'account3',
          value: 75.0,
          created_at: '2023-10-28 14:15:00',
        },
        // Adicione mais transações conforme necessário
      ];


    const [balanceVisible, setBalanceVisible] = useState(false);

    const toggleBalance = (balanceVisible) => {
        setBalanceVisible(!balanceVisible);
    };

    return (
        <div className={styles.cardcontainer}>
            <div className={styles.titlebox}>
                <p className={styles.title}>
                  <strong> Suas transações  </strong>  
                    </p>
                <div className={styles.icon}> <FaExchangeAlt size={'20px'} /> </div>
            </div>
            <div className={styles.card}>

            {transitionsDataMock.map(
                (transaction) => {
                        return <TransitionsList transaction={transaction}/>}
                    )}

                         </div>
        </div>
    );
};

export default Transactions;
