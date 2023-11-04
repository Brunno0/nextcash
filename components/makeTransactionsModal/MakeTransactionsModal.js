import React from 'react';
import styles from './MakeTransactionsModal.module.css';
import { FaTimes } from 'react-icons/fa';
import InputTransactions from '../input/inputTransactions';
import InputValue from '../input/inputValue';

const MakeTransactionsModal = ({ user, isOpen, setModalOpen }) => {
  if (!isOpen) {
    return null;
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.modalBackground} onClick={handleCloseModal}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Para: {user.name}</h3>
          <button onClick={handleCloseModal} className={styles.closeButton}>
          <FaTimes /> 
          </button>
        </div>
        <div className={styles.modalContent}>
          Valor: <InputValue/>
                  </div>
        <div className={styles.modalFooter}>
          <button onClick={handleCloseModal}>Fechar</button>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default MakeTransactionsModal;
