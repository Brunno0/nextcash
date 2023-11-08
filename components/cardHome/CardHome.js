import React, { useContext, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import styles from './cardHome.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const CardHome = () => {
    const [balanceVisible, setBalanceVisible] = useState(false);
    
    const context = useContext(GlobalContext)
    const { formatCurrency, account } = context

    const toggleBalance = () => {
        setBalanceVisible(!balanceVisible); // Inverte o valor de balanceVisible
    };

    return (
        <div className={styles.cardcontainer}>
            <p className={styles.logo}>
                <strong>Conta: {account && account.id} </strong>
            </p>
            <div className={styles.card}>
                <div className={styles.box}>
                    💰 Saldo: {balanceVisible ? 
                        account.balance === 0 ? 'R$ 0,00' :
                        formatCurrency(account && account.balance) :
                        (
                            <span onClick={toggleBalance}
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
