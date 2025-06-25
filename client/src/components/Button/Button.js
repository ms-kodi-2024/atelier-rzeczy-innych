import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, icon: Icon, type = 'button', className = '' }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {children}
      {Icon && <span className={styles.icon}><Icon /></span>}
    </button>
  );
};

export default Button;
