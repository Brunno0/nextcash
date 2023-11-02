// CardHome.js
import React, { useContext } from 'react';
import styles from './transactions.module.css';
import TransactionsList from './TransactionsList';
import TransactionModal from '../transactionModal/TransactionModal';
import { GlobalContext } from '../../context/GlobalContext';

const Transactions = () => {

  const context = useContext(GlobalContext)
  const {
  
    account,
    transactions,
    selectedTransaction,
    closeModal
   }= context

 
  const coe = transactions.map(
    (transaction, index) => {
      if (transaction.debitedAccountId === account.id) {
        return (
          <TransactionsList
            key={index}
            transaction={transaction}
            icon={'right'}
          />)
      } else {
        return (
          <TransactionsList
            key={index}
            transaction={transaction}
            icon={'left'} />)
      }

    })

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.titlebox}>
        <p className={styles.title}>
          <strong> Suas transações </strong>
        </p>
        <div className={styles.icon}>

        </div>
      </div>
      <div className={styles.card}>
        {coe}
      </div>
      {selectedTransaction && (
        <TransactionModal transaction={selectedTransaction} onClose={closeModal} />
      )}
    </div>
  );
}


export default Transactions;
