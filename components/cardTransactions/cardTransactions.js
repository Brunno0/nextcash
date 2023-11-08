// cardTransactions.js resolvi separar, vai que né? 
import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './cardTransactions.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import IinputTransactions from '../input/inputTransactions';

const CardTransactions = () => {
    const context = useContext(GlobalContext)
    const { searchTerm, setSearchTerm } = context;
    return (
        <div className={styles.cardcontainer}>
            <p className={styles.logo}>
                <strong>Transações</strong>
            </p>
            <div className={styles.card}>
                <div className={styles.box}>
                  <IinputTransactions 
                    placeholder={"Pesquisar usuários"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/> 
                  <div  
                  className={styles.search}
                  onClick={()=>{console.log('search')}}> 
                  <AiOutlineSearch size={'30px'}/>
                  </div>
              
                </div>
            </div>
        </div>
    );
};

export default CardTransactions;
