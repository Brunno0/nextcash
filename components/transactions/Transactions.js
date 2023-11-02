// CardHome.js
import React, { useState } from 'react';
import styles from './transactions.module.css';
import TransactionsList from './TransactionsList';
import TransactionModal from '../transactionModal/TransactionModal';

const Transactions = ({ account, transactions }) => {

  const [balanceVisible, setBalanceVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };
  const toggleBalance = (balanceVisible) => {
    setBalanceVisible(!balanceVisible);
  };

  const debitedTransactions = transactions.filter(
    (transaction) => transaction.debitedAccountId === account.id
  );

  const creditedTransactions = transactions.filter(
    (transaction) => transaction.creditedAccountId === account.id
  );

  const coe = transactions.map(
    (transaction, index) => {
      if (transaction.debitedAccountId === account.id) {
        return (
          <TransactionsList
            transaction={transaction}
            key={index}
            handleTransactionClick={handleTransactionClick}
            icon={'right'}
          />)
      } else {
        return (
          <TransactionsList
            transaction={transaction}
            key={index}
            handleTransactionClick={handleTransactionClick}
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
