import React, { useContext, useState } from 'react';
import styles from './MakeTransactionsModal.module.css';
import { FaTimes } from 'react-icons/fa';
import InputValue from '../input/InputValue';
import { createTransaction } from '../../pages/api/api-client/api-client';
import { GlobalContext } from '../../context/GlobalContext';

const MakeTransactionsModal = ({ userToCredited, isOpen, setModalOpen }) => {
  const [inputValue, setInputValue] = useState('0.00');
  const context = useContext(GlobalContext);
  const { user: userDebited } = context;

  if (!isOpen) {
    return null;
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBlur = () => {
    const numericValue = parseFloat(inputValue.replace(',', '.')) || 0;
    const formattedValue = numericValue.toFixed(2);
    setInputValue(`R$ ${formattedValue}`);
  };

  const handleChange = (event) => {
    // Remova todos os caracteres não numéricos, exceto ',' e '.'
    const formattedValue = event.target.value.replace(/[^\d.,]/g, '');
    setInputValue(formattedValue);
  };

  const makeTransaction = async () => {
    const token = localStorage.getItem('token');
    const numericValue = parseFloat(inputValue.replace('R$ ', '').replace(',', '.')) || 0;

    if (numericValue < 0.01) {
      alert('O valor da transação deve ser maior que um centavo.');
      return;
    }

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
          <InputValue value={inputValue} onBlur={handleBlur} onChange={handleChange} />
        </div>
        <div className={styles.modalFooter}>
          <button onClick={makeTransaction}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default MakeTransactionsModal;
