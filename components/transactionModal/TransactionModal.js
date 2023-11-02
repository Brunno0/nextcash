import React from 'react';
import styles from './transactionModal.module.css';

const TransactionModal = ({ transaction, onClose }) => {


// repitindo a funçãoooooooo
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
    <div className={styles.modalBackground}>
      <div className={styles.modalContent} onClick={onClose}>
        
        <h2>Detalhes da Transação</h2>
        <p>ID da Transação: {transaction.id}</p>
        {transaction.debitedAccountId ? (
          <>
            <p>Debited Account ID: {transaction.debitedAccountId}</p>
            <p>Valor: { 
            formatCurrency(transaction.value)
            }</p>
            <p>Data: {transaction.created_at}</p>
          </>
        ) : (
          <>
            <p>Credited Account ID: {transaction.creditedAccountId}</p>
            <p>Valor: {transaction.value}</p>
            <p>Data: {transaction.created_at}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionModal;
