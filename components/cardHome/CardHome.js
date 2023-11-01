// CardHome.js
import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import styles from './CardHome.module.css';

const CardHome = ({ account }) => {
    const [balanceVisible, setBalanceVisible] = useState(false);
    
    const toggleBalance = (balanceVisible) => {
        setBalanceVisible(!balanceVisible);
    };

    const formatCurrency = (value) => {
        if (value) {
            const formattedValue = value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            });
            return formattedValue;
        }
        return '';
    };

    return (
        <div className={styles.cardcontainer}>
            <p className={styles.logo}>
                <strong>Conta: {account.id} </strong>
            </p>
            <div className={styles.card}>
                <div className={styles.box}>
                    💰 Saldo: {balanceVisible ?
                        formatCurrency(account.balance) :
                        (
                            <span onClick={() => toggleBalance(balanceVisible)}
                                style={{ cursor: 'pointer' }}>
                                *** <FaEyeSlash size={'1.1em'} />
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CardHome;
