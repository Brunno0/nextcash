// CardHome.js
import React, { useState } from 'react';
import { FaExchangeAlt, FaEyeSlash, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import styles from './transactions.module.css';

const TransactionsList = ({ transaction, user }) => {  
    return (
                <div className={styles.box}>
                    <FaLongArrowAltLeft />
                    <br></br>
                    <FaLongArrowAltRight />
                    <div className={styles.transactions}>
                        <div  className={styles.transaction}>
                            <p>id: {transaction.id}</p>
                            <p>Debited Account ID: {transaction.debitedAccountId}</p>
                            <p>Credited Account ID: {transaction.creditedAccountId}</p>
                            <p>Value: {transaction.value}</p>
                            <p>Created At: {transaction.created_at}</p>
                        </div>
                </div>
                </div>
    );
};

export default TransactionsList;
