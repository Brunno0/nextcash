import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import MakeTransactionsModal from '../makeTransactionsModal/MakeTransactionsModal';
import styles from './userList.module.css';

const MapedUserList = ({ user }) => {
  const context = useContext(GlobalContext);
  const { filterAccountsByUserId } = context;

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const accountUser = filterAccountsByUserId(user.id);

  return (
    <div className={styles.box} onClick={handleOpenModal}>
      <p>{accountUser ? accountUser.id : 'N/A'}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <MakeTransactionsModal user={user} isOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default MapedUserList;
