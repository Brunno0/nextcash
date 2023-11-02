// components/Neon.js
import React from 'react';
import styles from './Neon.module.css';

const Neon = () => {
  return (
    <div className={styles.container}>
      <h3>
        <span className={styles.span}>Next</span>
        <span className={styles.span}>Cash</span>   
        <span className={styles.span}>💰</span>  
        
      </h3>
    </div>
  );
};

export default Neon;
