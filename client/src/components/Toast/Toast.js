import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../Button/Button';
import styles from './Toast.module.scss';

const Toast = ({ productName, onClose }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/koszyk');
    onClose();
  };

  const handleContinueClick = () => {
    navigate('/produkty');
    onClose();
  };

  return (
    <div className={styles.toast}>
      <div className={styles.content}>
        <p className={styles.message}>
          „{productName.toUpperCase()}” został dodany do koszyka.
        </p>
        <div className={styles.buttons}>
          <Button onClick={handleContinueClick} icon={FiChevronLeft}>
            Kontynuuj zakupy
          </Button>
          <Button onClick={handleCartClick} icon={FiChevronRight}>
            Zobacz koszyk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
