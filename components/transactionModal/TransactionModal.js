import React, { useContext } from 'react';
import styles from './transactionModal.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const TransactionModal = ({ transaction, onClose }) => {

  const context = useContext(GlobalContext)
  const {
      formatCurrency,
      handleTransactionClick,
      getNameUserByAccount,
      formatDateTime       }= context

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent} onClick={onClose}>
        
        <h2>Detalhes da Transação</h2>
        <p>ID da Transação: {transaction.id}</p>
        {transaction.debitedAccountId ? (
          <>
            <p>Conta debitada: {transaction.debitedAccountId}</p>
            <p>Valor: { 
            formatCurrency(transaction.value)
            }</p>
            <p>Data: {formatDateTime(transaction.created_at)}</p>
          </>
        ) : (
          <>
            <p>Credited Account ID: {transaction.creditedAccountId}</p>
            <p>Valor: {transaction.value}</p>
            <p>Data: {formatDateTime(transaction.created_at)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionModal;
