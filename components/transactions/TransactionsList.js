// CardHome.js

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import styles from './transactions.module.css';


const TransactionsList = ({handleTransactionClick ,transaction, icon }) => {

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
        <div className={styles.box} onClick={() => handleTransactionClick(transaction)}>
        <div className={styles.box}>

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
                        <p>De:  {transaction.debitedAccountId} </p>
                        <p>Valor: {
                            formatCurrency(transaction.value)
                            
                            }</p>
                        <p>Data: {transaction.created_at}</p>
                    </div>
                </div>
            ) : (
                <div className={styles.transactions}>
                    <div className={styles.transaction}>
                        <p>Para: {transaction.creditedAccountId}</p>
                        <p>Valor: {
                            formatCurrency(transaction.value)
                            
                            }</p>
                        <p>Data: {transaction.created_at}</p>
                    </div>
                </div>
                )
            }



        </div>
        </div>
    );
};

export default TransactionsList;
