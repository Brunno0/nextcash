// CardHome.js

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import styles from './transactions.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


const TransactionsList = ({ transaction,icon }) => {
    
    const context = useContext(GlobalContext)
    const {
        formatCurrency,
        handleTransactionClick,
        getNameUserByAccount,
        formatDateTime       
    }= context
     
    return (
        <div className={styles.box} onClick={() => handleTransactionClick(transaction)}>
     

            <span className={styles.span}>
                <div className={styles.transactionId}>
               <strong>   {transaction.id}</strong>  
                </div> 
                {icon === 'left' ? (
                    <div className={styles.emoji}>
                        💲🤑<FaLongArrowAltLeft size={'20px'} />
                    </div>
                ) : (
                    <div className={styles.emoji}>
                        💸<FaLongArrowAltRight size={'20px'} />
                    </div>)
                }
            </span>

            {icon === 'left' ? 
            (
                <div className={styles.transactions}>
                    <div className={styles.transaction}>
                        <p>De:  {
                            getNameUserByAccount(transaction.debited_account_id)} </p>
                        <p>Valor: {
                            formatCurrency(transaction.value)
                            
                            }</p>
                        <p>{formatDateTime(transaction.created_at)}</p>
                    </div>
                </div>
            ) : (
                <div className={styles.transactions}>
                    <div className={styles.transaction}>
                        <p>Para: {getNameUserByAccount(transaction.credited_account_id)}</p>
                        <p>Valor: {
                            formatCurrency(transaction.value)
                            
                            }</p>
                        <p>{formatDateTime(transaction.created_at)}</p>
                    </div>
                </div>
                )
            }



        </div>
       
    );
};

export default TransactionsList;
