import React, { useContext } from 'react';
import styles from './userList.module.css';
import MapedUserList from './MapedUserList';
import { GlobalContext } from '../../context/GlobalContext';
import { FcBusinessContact } from "react-icons/fc";

const UsersList = ({accountID}) => {
  const context = useContext(GlobalContext);
  const { users, searchTerm } = context;


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const coe = filteredUsers.map((user, index) => (
    <MapedUserList user={user} key={index} />
  ));

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.titlebox}>
        <p className={styles.title}>
          <strong> Contatos </strong>
        </p>
        <div className={styles.icon}>
          <FcBusinessContact size={'30px'} />
        </div>
      </div>
      <div className={styles.card}>{coe}</div>
    </div>
  );
};

export default UsersList;
