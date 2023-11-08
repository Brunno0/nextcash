// CardHome.js
import React, { useContext, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import styles from './cardHome.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const CardHome = () => {
    const [balanceVisible, setBalanceVisible] = useState(false);
    
    const context = useContext(GlobalContext)
    const {formatCurrency, account} = context

    const toggleBalance = (balanceVisible) => {
        setBalanceVisible(!balanceVisible);
    };
    return (
        <div className={styles.cardcontainer}>
            <p className={styles.logo}>
                <strong>Conta: {account && account.id} </strong>
            </p>
            <div className={styles.card}>
                <div className={styles.box}>
                    💰 Saldo: {balanceVisible ?
                        formatCurrency(account && account.balance) :
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
