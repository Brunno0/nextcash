import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import InputValue from '../input/inputValue';
import { createTransaction } from '../../pages/api/api-client/api-client';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './makeTransactionsModal.module.css';

const CURRENCY_SYMBOL = 'R$ ';
const MIN_TRANSACTION_AMOUNT = 0.01;

const MakeTransactionsModal = ({ userToCredited, isOpen, setModalOpen }) => {
  const [inputValue, setInputValue] = useState('0,00');
  const context = useContext(GlobalContext);
  const { user: userDebited } = context;

  if (!isOpen) {
    return null;
  }

  const validateTransactionValue = (value) => {
    const numericValue = parseFloat(value.replace(CURRENCY_SYMBOL, '').replace(',', '.')) || 0;
    return numericValue >= MIN_TRANSACTION_AMOUNT;
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event) => {
    const formattedValue = event.target.value.replace(/[^\d.,]/g, '');
    setInputValue(formattedValue);
  };

  const makeTransaction = async () => {
    const numericValue = parseFloat(inputValue.replace(CURRENCY_SYMBOL, '').replace(',', '.')) || 0;

    if (!validateTransactionValue(inputValue)) {
      alert('O valor da transação deve ser maior que um centavo.');
      return;
    }

    const token = localStorage.getItem('token');
    const transactionResponseApi = await createTransaction(token, userDebited.id, userToCredited.id, numericValue);

      alert(transactionResponseApi.message);
    
    
    handleCloseModal();
  };

  return (
    <div className={styles.modalBackground} onClick={handleCloseModal}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Para: {userToCredited.name}</h3>
          <button onClick={handleCloseModal} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.value}>Valor:</div>
          <InputValue value={inputValue} onChange={handleChange} />
        </div>
        <div className={styles.modalFooter}>
          <button onClick={makeTransaction}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default MakeTransactionsModal;
