import React, { useContext } from 'react';
import styles from './transactionModal.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import { FaPrint, FaTimes } from 'react-icons/fa';
import { AiOutlineShareAlt } from 'react-icons/ai';

const TransactionModal = ({ transaction, onClose }) => {
  const context = useContext(GlobalContext);
  const {
    formatCurrency,
    getNameUserByAccount,
    formatDateTime,
  } = context;

  return (
    
    <div className={styles.modalBackground}>
      <div className={styles.modalContent} >
        <div className={styles.closeButton} onClick={onClose}>
          <FaTimes /> 
        </div>
        <div className={styles.title}>Detalhes da Transação</div>
        <div className={styles.transactionDetails}>
          <div className={styles.transactionInfo}>
            <p>ID da transação:</p>
            <p><strong>{transaction.id}</strong></p>
          </div>
          <div className={styles.transactionInfo}>
            <p>Conta debitada:</p>
            <p>{transaction.debitedAccountId}</p>
            <p><strong>{getNameUserByAccount(transaction.debitedAccountId)}</strong></p>
          </div>
          <div className={styles.transactionInfo}>
            <p>Conta creditada:</p>
            <p>{transaction.creditedAccountId}</p>
            <p><strong>{getNameUserByAccount(transaction.creditedAccountId)}</strong></p>
          </div>
          <div className={styles.transactionInfo}>
            <p>Valor:</p>
            <p><strong>{formatCurrency(transaction.value)}</strong></p>
          </div>
          <div className={styles.transactionInfo}>
            <p>Data:</p>
            <p><strong>{formatDateTime(transaction.created_at)}</strong></p>
          </div>
        </div>
        
           
        <div className={styles.printButton}>
          <div className={styles.shareButton}>
            <AiOutlineShareAlt size={'25px'}/> 
            </div> 
            <FaPrint />
        </div>
      
      </div>
    </div>
  );
};

export default TransactionModal;
